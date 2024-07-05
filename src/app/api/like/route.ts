import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    result: {
      resultCode: "OK",
      resultMessage: "성공",
      resultDescription: "성공",
    },
    body: {
      totalElements: 12,
      totalPages: 2,
      size: 10,
      content: [
        {
          name: "숙소 이름5",
          description:
            "숙소5 설명입니다숙소5 설명입니다숙소5 설명입니다숙소5 설명입니다숙소5 설명입니다숙소5 설명입니다숙소5 설명입니다숙소5 설명입니다숙소5 설명입니다숙소5 설명입니다",
          postalCode: 4564521,
          address:
            "숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소숙소5 주소",
          accomodationImageUrls: [
            "https://i.postimg.cc/cJQR3R80/1-3.jpg",
            "https://i.postimg.cc/tRwwvwfY/Korea-Quality-6-3.jpg",
            "https://i.postimg.cc/HsY6gsPB/2-3.jpg",
          ],
        },
        {
          name: "숙소 이름6",
          description: "숙소6 설명입니다",
          postalCode: 5457667,
          address: "숙소6 주소",
          accomodationImageUrls: [
            "https://i.postimg.cc/cJQR3R80/1-3.jpg",
            "https://i.postimg.cc/tRwwvwfY/Korea-Quality-6-3.jpg",
            "https://i.postimg.cc/HsY6gsPB/2-3.jpg",
          ],
        },
      ],
    },
  };

  return NextResponse.json(data);
}
