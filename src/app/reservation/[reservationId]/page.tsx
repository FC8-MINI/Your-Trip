"use client";

import { useEffect, useState } from "react";
import ReservationDetail, { ReservationDetailProps } from "@/components/Reservation/ReservationDetail";

const ReservationDetailPage = ({ params: { reservationId } }: { params: { reservationId: string } }) => {
  const [data, setData] = useState<ReservationDetailProps>();

  useEffect(() => {
    const fetchReservationDetail = async () => {
      try {
        const url = ` https://api.miniteam2.store/api/reservation/detail/${reservationId}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        setData(result.body);
      } catch (error) {
        console.error("Error fetching reservation detail:", error);
      }
    };

    fetchReservationDetail().catch((error) => {
      console.error("Error in fetchReservationDetail:", error);
    });
  }, [reservationId]);

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <ReservationDetail
      accomodationName={data.accomodationName}
      memberName={data.memberName}
      roomName={data.roomName}
      checkIn={data.checkIn}
      checkOut={data.checkOut}
      baseGuests={data.baseGuests}
      extraPrice={data.extraPrice}
      parkingAvailable={data.parkingAvailable}
      cookingAvailable={data.cookingAvailable}
      roomPrice={data.roomPrice}
      roomImageUrls={data.roomImageUrls}
    />
  );
};

export default ReservationDetailPage;
