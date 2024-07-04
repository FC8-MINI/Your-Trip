import Input from "@/components/Input";
import { OptionBox, InputBox } from "./AccomodationRoomOption.styles";
import { getCurrentKSTDateTimeLocal } from "@/utils/time";
import { forwardRef, useImperativeHandle, useState } from "react";

export interface OptionParams {
  checkIn: string;
  checkOut: string;
  guests: string;
}

const AccomodationRoomOption = forwardRef((props, ref) => {
  const [checkInValue, setCheckInValue] = useState("");
  const [checkOutValue, setCheckOutValue] = useState("");
  const [guestNumber, setGuestNumber] = useState("1");

  useImperativeHandle(ref, () => ({
    getOptionParams: (): OptionParams => ({
      checkIn: checkInValue,
      checkOut: checkOutValue,
      guests: guestNumber,
    }),
  }));

  return (
    <OptionBox>
      <InputBox>
        <Input
          label="체크인"
          min={getCurrentKSTDateTimeLocal()}
          value={checkInValue}
          onChange={(e) => setCheckInValue(e.currentTarget.value)}
          type="datetime-local"
          width="full"
          placeholder="체크인 날짜를 입력해주세요."
        />
      </InputBox>
      <InputBox>
        <Input
          label="체크아웃"
          min={getCurrentKSTDateTimeLocal()}
          value={checkOutValue}
          onChange={(e) => setCheckOutValue(e.currentTarget.value)}
          type="datetime-local"
          placeholder="체크아웃 날짜를 입력해주세요."
        />
      </InputBox>
      <InputBox>
        <Input
          label="인원"
          type="number"
          value={guestNumber}
          min="1"
          onChange={(e) => setGuestNumber(e.currentTarget.value)}
        />
      </InputBox>
    </OptionBox>
  );
});

AccomodationRoomOption.displayName = "AccomodationRoomOption";

export default AccomodationRoomOption;
