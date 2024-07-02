import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    result: {
      resultCode: "OK",
      resultMessage: "성공",
      resultDescription: "예약 목록 조회 성공",
    },
    body: {
      totalPages: 5,
      totalElements: 5,
      content: [
        {
          reservationId: 1,
          accomodationName: "문게스트하우스 1",
          accomodationAddress: "서울특별시 종로구 삼일대로32길 31-18(운니동)",
          roomName: "운현당",
          totalPrice: 550000,
          peopleNumber: 3,
          checkIn: "2024-02-21T14:00:00",
          checkOut: "2024-02-25T14:00:00",
        },
        {
          reservationId: 2,
          accomodationName: "문게스트하우스 2",
          accomodationAddress: "서울특별시 종로구 삼일대로32길 31-18(운니동)",
          roomName: "운현당",
          totalPrice: 550000,
          peopleNumber: 2,
          checkIn: "2024-04-03T14:00:00",
          checkOut: "2024-04-05T14:00:00",
        },
        {
          reservationId: 3,
          accomodationName: "문게스트하우스 3",
          accomodationAddress: "서울특별시 종로구 삼일대로32길 31-18(운니동)",
          roomName: "본채-Pine1",
          totalPrice: 110000,
          peopleNumber: 2,
          checkIn: "2024-06-28T14:00:00",
          checkOut: "2024-06-30T10:00:00",
        },
        {
          reservationId: 4,
          accomodationName: "문게스트하우스 4",
          accomodationAddress: "서울특별시 종로구 삼일대로32길 31-18(운니동)",
          roomName: "본채-Pine1",
          totalPrice: 110000,
          peopleNumber: 2,
          checkIn: "2024-06-28T14:00:00",
          checkOut: "2024-06-30T10:00:00",
        },
        {
          reservationId: 5,
          accomodationName: "문게스트하우스 5",
          accomodationAddress: "서울특별시 종로구 삼일대로32길 31-18(운니동)",
          roomName: "향나무",
          totalPrice: 110000,
          peopleNumber: 2,
          checkIn: "2024-06-28T14:00:00",
          checkOut: "2024-06-30T10:00:00",
        },
      ],
    },
  };

  return NextResponse.json(data);
}
