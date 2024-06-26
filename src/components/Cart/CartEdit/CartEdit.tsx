import { useFormContext } from "react-hook-form";
import { ModalBackground, ModalContainer, ModalContent, ModalActions, Select, InputContainer } from "./CartEdit.styles";
import { CartEditProps } from "./CartEdit.types";
import Button from "@/components/Button"; // 공통 버튼 컴포넌트 import

const CartEdit = ({ item, onClose, roomNames, index }: CartEditProps & { index: number }) => {
  const { register } = useFormContext();

  const handleSave = () => {
    alert("수정되었습니다");
    onClose();
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        const time = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        times.push(
          <option key={time} value={time}>
            {time}
          </option>,
        );
      }
    }
    return times;
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <h2>날짜/객실/인원</h2>
        <ModalContent>
          <InputContainer>
            체크인 날짜:
            <input type="date" {...register(`items[${index}].checkInDate`)} defaultValue={item.checkInDate} />
          </InputContainer>
          <InputContainer>
            체크인 시간:
            <Select {...register(`items[${index}].checkInTime`)}>{generateTimeOptions()}</Select>
          </InputContainer>
          <InputContainer>
            체크아웃 날짜:
            <input type="date" {...register(`items[${index}].checkOutDate`)} defaultValue={item.checkOutDate} />
          </InputContainer>
          <InputContainer>
            체크아웃 시간:
            <Select {...register(`items[${index}].checkOutTime`)}>{generateTimeOptions()}</Select>
          </InputContainer>
          <InputContainer>
            객실 이름:
            <Select {...register(`items[${index}].roomName`)}>
              {roomNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </InputContainer>
          <InputContainer>
            인원:
            <Select {...register(`items[${index}].people`)}>
              {[1, 2, 3, 4].map((option, index) => (
                <option key={index} value={option}>
                  {option}명
                </option>
              ))}
            </Select>
          </InputContainer>
        </ModalContent>
        <ModalActions>
          <Button onClick={onClose}>취소</Button>
          <Button onClick={handleSave}>저장</Button>
        </ModalActions>
      </ModalContainer>
    </ModalBackground>
  );
};

export default CartEdit;
