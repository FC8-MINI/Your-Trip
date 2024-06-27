import {
  SummaryContainer,
  SummaryText,
  SummaryPricesContainer,
  SummaryPrice,
  StyledButton,
  ButtonContainer,
} from "./CartDetails.styles";
import { MdPayment } from "react-icons/md";

const CartDetails = () => {
  return (
    <>
      <SummaryContainer>
        <SummaryText>결제 예상 금액</SummaryText>
        <SummaryPricesContainer>
          <SummaryPrice>총 1건</SummaryPrice>
          <SummaryPrice>240,000원</SummaryPrice>
        </SummaryPricesContainer>
      </SummaryContainer>
      <ButtonContainer>
        <StyledButton $size="large">
          <MdPayment />
          결제하기
        </StyledButton>
      </ButtonContainer>
    </>
  );
};

export default CartDetails;
