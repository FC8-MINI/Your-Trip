import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    result: {
      resultCode: "OK",
      resultMessage: "성공",
      resultDescription: "성공",
    },
    body: {
      totalPages: 3,
      totalElements: 15,
      content: [
        {
          id: 1,
          name: "숙소 이름1",
          description:
            "숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. 숙소1 설명입니다. ",
          postalCode: 2428099,
          address: "숙소1 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 1,
        },
        {
          id: 10,
          name: "숙소 이름10",
          description: "숙소10 설명입니다",
          postalCode: 6274805,
          address: "숙소10 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 2,
        },
        {
          id: 11,
          name: "숙소 이름11",
          description: "숙소11 설명입니다",
          postalCode: 2443567,
          address: "숙소11 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 3,
        },
        {
          id: 12,
          name: "숙소 이름12",
          description: "숙소12 설명입니다",
          postalCode: 2342567,
          address: "숙소12 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 3,
        },
        {
          id: 13,
          name: "숙소 이름13",
          description: "숙소13 설명입니다",
          postalCode: 2343543,
          address: "숙소13 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 3,
        },
      ],
    },
  };

  return NextResponse.json(data);
}
