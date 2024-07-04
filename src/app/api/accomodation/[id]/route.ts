import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
  const data = {
    result: {
      resultCode: "OK",
      resultMessage: "성공",
      resultDescription: "성공",
    },
    body: {
      accomodation: {
        id: 1,
        name: "세인트존스 호텔",
        description:
          "강문해변 앞에 자리 잡아 객실에서 드넓고 아름다운 바다를 감상할 수 있습니다. \n 더불어 아름다운 대자연과 어우러지는 특별하고도 환상적인 경험을 느낄 수 있습니다.",
        postalCode: 2428099,
        address: "숙소1 주소",
        parkingAvailable: true,
        cookingAvailable: true,
        checkIn: "2024-06-18T00:00:00",
        checkOut: "2024-06-18T00:00:00",
        categoryId: 1,
        imageUrls: [
          "https://i.postimg.cc/cJQR3R80/1-3.jpg",
          "https://i.postimg.cc/tRwwvwfY/Korea-Quality-6-3.jpg",
          "https://i.postimg.cc/HsY6gsPB/2-3.jpg",
        ],
      },
      rooms: [
        {
          id: 1,
          name: "일반",
          baseGuests: 2,
          price: 40000,
          maxGuests: 4,
          extraPersonCharge: 10000,
          reservationAvailable: true,
          imageUrls: [
            "https://i.postimg.cc/TwPvPLG0/5-3.jpg",
            "https://i.postimg.cc/PJtbMCn9/4-3.jpg",
            "https://i.postimg.cc/0NhJVZhL/5-3.jpg",
          ],
        },
        {
          id: 2,
          name: "일반 22",
          baseGuests: 3,
          price: 50000,
          maxGuests: 5,
          extraPersonCharge: 10000,
          reservationAvailable: false,
          imageUrls: [
            "https://i.postimg.cc/cCWVgXpQ/2-3.jpg",
            "https://i.postimg.cc/gkWkqCX8/2-3.jpg",
            "https://i.postimg.cc/MH007WQX/3-3.jpg",
          ],
        },
      ],
    },
  };

  return NextResponse.json(data);
}
