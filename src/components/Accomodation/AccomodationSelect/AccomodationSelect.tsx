import Input from "@/components/Input";
import { SelectBox, InputBox, DateBox, WaveText } from "./AccomodationSelect.styles";

const AccomodationSelect = () => {
  return (
    <SelectBox>
      <DateBox>
        <InputBox>
          <Input label="체크인 날짜" type="date" width="full" />
        </InputBox>
        <WaveText>~</WaveText>
        <InputBox>
          <Input label="체크아웃 날짜" type="date" />
        </InputBox>
      </DateBox>
      <InputBox>
        <Input label="인원" type="number" />
      </InputBox>
    </SelectBox>
  );
};

export default AccomodationSelect;
