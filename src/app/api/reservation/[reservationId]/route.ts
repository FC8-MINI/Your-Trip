import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    result: {
      resultCode: "RESERVATION_DETAIL_RETRIEVED",
      resultMessage: "success",
      resultDescription: "예약 상세 정보 조회 성공",
    },
    body: {
      accomodationName: "문게스트하우스 1",
      memberName: "김패캠",
      roomName: "게스트 방",
      checkIn: "2024-04-03T14:00:00",
      checkOut: "2024-04-05T14:00:00",
      baseGuests: 2,
      extraPrice: 10000,
      parkingAvailable: true,
      cookingAvailable: false,
      roomPrice: 550000,
      roomImageUrls: [
        "https://i.postimg.cc/cCWVgXpQ/2-3.jpg",
        "https://i.postimg.cc/gkWkqCX8/2-3.jpg",
        "https://i.postimg.cc/MH007WQX/3-3.jpg",
      ],
    },
  };

  return NextResponse.json(data);
}
