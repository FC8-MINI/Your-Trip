import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    result: {
      resultCode: "OK",
      resultMessage: "성공",
      resultDescription: "예약 목록 조회 성공",
    },
    body: {
      totalPages: 1,
      totalElements: 5,
      content: [
        {
          reservationId: 1,
          accomodationName: "문게스트하우스 1",
          roomName: "운현당",
          totalPrice: 550000,
          peopleNumber: 3,
          checkIn: "2024-02-21T14:00:00",
          checkOut: "2024-02-25T14:00:00",
        },
        {
          reservationId: 2,
          accomodationName: "문게스트하우스 2",
          roomName: "운현당",
          totalPrice: 550000,
          peopleNumber: 3,
          checkIn: "2024-02-21T14:00:00",
          checkOut: "2024-02-25T14:00:00",
        },
        {
          reservationId: 3,
          accomodationName: "문게스트하우스 3",
          roomName: "운현당",
          totalPrice: 550000,
          peopleNumber: 3,
          checkIn: "2024-02-21T14:00:00",
          checkOut: "2024-02-25T14:00:00",
        },
        {
          reservationId: 4,
          accomodationName: "문게스트하우스 4",
          roomName: "운현당",
          totalPrice: 550000,
          peopleNumber: 3,
          checkIn: "2024-02-21T14:00:00",
          checkOut: "2024-02-25T14:00:00",
        },
      ],
    },
  };

  return NextResponse.json(data);
}
