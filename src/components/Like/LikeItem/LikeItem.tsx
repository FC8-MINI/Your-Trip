import { LikeItemTitle } from "./LikeItem.styles";

const LikeItem = () => {
  return (
    <li>
      <LikeItemTitle>숙소 이름</LikeItemTitle>
      <div>
        <span>우편번호</span>
      </div>
      <p>숙소 설명</p>
      <address>숙소 주소</address>
    </li>
  );
};

export default LikeItem;
