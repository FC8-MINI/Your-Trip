import {
  SummaryContainer,
  SummaryText,
  SummaryPricesContainer,
  SummaryPrice,
  CartButton,
  ButtonContainer,
} from "./CartDetails.styles";
import { MdPayment } from "react-icons/md";

const CartDetails = () => {
  return (
    <>
      <SummaryContainer>
        <SummaryText>총 1건</SummaryText>
        <SummaryPricesContainer>
          <SummaryPrice>결제 예상 금액</SummaryPrice>
          <SummaryPrice>240,000원</SummaryPrice>
        </SummaryPricesContainer>
      </SummaryContainer>
      <ButtonContainer>
        <CartButton href={`/pay`}>
          <MdPayment />
          예약하기
        </CartButton>
      </ButtonContainer>
    </>
  );
};

export default CartDetails;
