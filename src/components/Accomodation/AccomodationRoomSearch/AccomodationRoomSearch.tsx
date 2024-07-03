import Input from "@/components/Input";
import { SearchBox, InputBox } from "./AccomodationRoomSearch.styles";
import Button from "@/components/Button";

const AccomodationRoomSearch = () => {
  return (
    <SearchBox>
      <InputBox>
        <Input label="체크인" type="date" width="full" />
      </InputBox>
      <InputBox>
        <Input label="체크아웃" type="date" />
      </InputBox>
      <InputBox>
        <Input label="인원" type="number" />
      </InputBox>
      <Button $mode="primary">검색</Button>
    </SearchBox>
  );
};

export default AccomodationRoomSearch;
