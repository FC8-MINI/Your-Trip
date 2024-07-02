import { useForm, Controller, FormProvider } from "react-hook-form";
import { ModalBackground, ModalContainer, ModalContent, ModalActions, Select, InputContainer } from "./PayEdit.styles";
import { PayEditProps, PayEditFormValues } from "./PayEdit.types";
import Button from "@/components/Button";
import { getCurrentKSTDateTimeLocal } from "@/utils/time";

const PayEdit = ({ item, onClose, onUpdate, roomNames, index }: PayEditProps) => {
  const methods = useForm<PayEditFormValues>({
    defaultValues: item,
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const calculateNights = (checkInDate: string, checkOutDate: string) => {
    const checkInTime = new Date(checkInDate).getTime();
    const checkOutTime = new Date(checkOutDate).getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((checkOutTime - checkInTime) / oneDay);
  };

  const nights = checkIn && checkOut ? calculateNights(checkIn, checkOut) : 0;

  const onSubmit = (data: PayEditFormValues) => {
    onUpdate(data); // 업데이트된 데이터를 부모 컴포넌트로 전달
    onClose();
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <h2>날짜/객실/인원</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalContent>
              <InputContainer>
                체크인 날짜:
                <Controller
                  name="checkIn"
                  control={control}
                  rules={{
                    required: "체크인 날짜를 입력해야 합니다.",
                    validate: (value) => value >= getCurrentKSTDateTimeLocal() || "현재 날짜보다 이후여야 합니다.",
                  }}
                  render={({ field }) => (
                    <input
                      type="datetime-local"
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
                {errors.checkIn && <p>{errors.checkIn.message}</p>}
              </InputContainer>
              <InputContainer>
                체크아웃 날짜:
                <Controller
                  name="checkOut"
                  control={control}
                  rules={{
                    required: "체크아웃 날짜를 입력해야 합니다.",
                    validate: (value) => value >= getCurrentKSTDateTimeLocal() || "현재 날짜보다 이후여야 합니다.",
                  }}
                  render={({ field }) => (
                    <input
                      type="datetime-local"
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
                {errors.checkOut && <p>{errors.checkOut.message}</p>}
              </InputContainer>
              <InputContainer>
                객실 이름:
                <Controller
                  name="roomName"
                  control={control}
                  rules={{ required: "객실 이름을 선택해야 합니다." }}
                  render={({ field }) => (
                    <Select {...field}>
                      {roomNames.map((name, idx) => (
                        <option key={idx} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  )}
                />
                {errors.roomName && <p>{errors.roomName.message}</p>}
              </InputContainer>
              <InputContainer>
                인원:
                <Controller
                  name="peopleNumber"
                  control={control}
                  rules={{ required: "인원을 선택해야 합니다." }}
                  render={({ field }) => (
                    <Select {...field}>
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((option) => (
                        <option key={option} value={option}>
                          {option}명
                        </option>
                      ))}
                    </Select>
                  )}
                />
                {errors.peopleNumber && <p>{errors.peopleNumber.message}</p>}
              </InputContainer>
              <InputContainer>
                <p>
                  객실/인원/일정: {methods.getValues("roomName")} / {methods.getValues("peopleNumber")}명 / {nights}박
                </p>
              </InputContainer>
            </ModalContent>
            <ModalActions>
              <Button type="button" onClick={onClose}>
                취소
              </Button>
              <Button type="submit">저장</Button>
            </ModalActions>
          </form>
        </FormProvider>
      </ModalContainer>
    </ModalBackground>
  );
};

export default PayEdit;
