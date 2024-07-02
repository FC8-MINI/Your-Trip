import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    result: {
      resultCode: "OK",
      resultMessage: "성공",
      resultDescription: "예약 목록 조회 성공",
    },
    body: {
      accomodationName: "문게스트하우스 1",
      userNmae: "김패캠",
      checkIn: "2024-04-03T14:00:00",
      checkOut: "2024-04-05T14:00:00",
      baseGuests: 5,
      extraCharge: 0,
      parkingAvailable: true,
      cookingAvailable: true,
      roomPrice: 550000,
    },
  };

  return NextResponse.json(data);
}
