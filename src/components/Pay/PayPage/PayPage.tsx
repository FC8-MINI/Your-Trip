import { useSearchParams } from "next/navigation";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import PayTerms from "../PayTerms";
import Container from "@/components/Container";
import PayEdit from "../PayEdit";
import {
  PayTitle,
  PayContainer,
  PayImageWrapper,
  PayItemImage,
  PayInfoBox,
  AccommodationName,
  InfoText,
  PriceText,
  CheckInOutBox,
  EditButton,
} from "./PayPage.styles";
import { ItemSubset, PayEditFormValues } from "../PayEdit/PayEdit.types";

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return date
    .toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(", ", " ");
};

const calculateNights = (checkIn: string, checkOut: string) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const calculateTotalPrice = (basePrice: number, peopleNumber: number, additionalCostPerPerson: number) => {
  return basePrice + (peopleNumber - 1) * additionalCostPerPerson;
};

const PayPage = () => {
  const searchParams = useSearchParams();

  const bookingInfo: PayEditFormValues & { isEditModalOpen: boolean } = {
    checkIn: searchParams.get("checkIn") || "",
    checkOut: searchParams.get("checkOut") || "",
    roomName: searchParams.get("roomName") || "",
    peopleNumber: parseInt(searchParams.get("peopleNumber") || "1"),
    isEditModalOpen: false,
  };

  const basePrice = parseInt(searchParams.get("price") || "0");
  const additionalCostPerPerson = 20000;

  const methods = useForm({
    defaultValues: bookingInfo,
  });

  const isEditModalOpen = useWatch({
    control: methods.control,
    name: "isEditModalOpen",
  });

  const handleEditButtonClick = () => {
    methods.setValue("isEditModalOpen", true);
  };

  const handleCloseModal = () => {
    methods.setValue("isEditModalOpen", false);
  };

  const handleUpdateBookingInfo = (updatedInfo: ItemSubset) => {
    methods.reset({ ...methods.getValues(), ...updatedInfo });
    methods.setValue("isEditModalOpen", false);
  };

  const totalPrice = calculateTotalPrice(basePrice, methods.watch("peopleNumber"), additionalCostPerPerson);

  return (
    <Container>
      <PayTitle>결제</PayTitle>
      <PayContainer>
        <PayImageWrapper>
          <PayItemImage src={searchParams.get("imageUrl") || ""} alt={searchParams.get("name") || ""} />
        </PayImageWrapper>
        <PayInfoBox>
          <AccommodationName>{searchParams.get("name")}</AccommodationName>
          <div>
            <InfoText>{methods.watch("roomName")}</InfoText>
            <InfoText>/{methods.watch("peopleNumber")}명</InfoText>
            <InfoText>/{calculateNights(methods.watch("checkIn"), methods.watch("checkOut"))}박</InfoText>
          </div>
          <CheckInOutBox>
            <div>
              <span>체크인</span>
              <p>{formatDateTime(methods.watch("checkIn"))}</p>
            </div>
            <div>
              <span>체크아웃</span>
              <p>{formatDateTime(methods.watch("checkOut"))}</p>
            </div>
          </CheckInOutBox>
          <PriceText>
            총 결제금액 <span>{totalPrice.toLocaleString()}원</span>
          </PriceText>
          <EditButton onClick={handleEditButtonClick}>수정</EditButton>
        </PayInfoBox>
      </PayContainer>
      <PayTerms amount={totalPrice} />
      {isEditModalOpen && (
        <FormProvider {...methods}>
          <PayEdit
            item={methods.getValues()}
            onClose={handleCloseModal}
            onUpdate={handleUpdateBookingInfo}
            roomNames={["객실1", "객실2", "객실3"]} // 실제로 필요한 값을 전달하세요.
            index={0} // 실제로 필요한 값을 전달하세요.
          />
        </FormProvider>
      )}
    </Container>
  );
};

export default PayPage;
