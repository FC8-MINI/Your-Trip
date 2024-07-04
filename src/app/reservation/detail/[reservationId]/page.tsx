"use client";

import { useEffect, useState } from "react";
import ReservationDetail, { ReservationDetailProps } from "@/components/Reservation/ReservationDetail";

const ReservationDetailPage = ({ params: { reservationId } }: { params: { reservationId: string } }) => {
  const [reservationDetail, setReservationDetail] = useState<ReservationDetailProps>();

  useEffect(() => {
    const fetchReservationDetail = async () => {
      try {
        const url = `https://api.miniteam2.store/api/reservation/detail/${reservationId}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          cache: "no-store",
        });

        const result = await response.json();
        setReservationDetail(result.body);
      } catch (error) {
        console.error("Error fetching reservation detail:", error);
      }
    };

    fetchReservationDetail().catch((error) => {
      console.error("Error in fetchReservationDetail:", error);
    });
  }, [reservationId]);

  if (!reservationDetail) {
    return <div>Error loading data</div>;
  }

  return (
    <ReservationDetail
      accomodationName={reservationDetail.accomodationName}
      memberName={reservationDetail.memberName}
      roomName={reservationDetail.roomName}
      checkIn={reservationDetail.checkIn}
      checkOut={reservationDetail.checkOut}
      baseGuests={reservationDetail.baseGuests}
      extraPrice={reservationDetail.extraPrice}
      parkingAvailable={reservationDetail.parkingAvailable}
      cookingAvailable={reservationDetail.cookingAvailable}
      roomPrice={reservationDetail.roomPrice}
      roomImageUrls={reservationDetail.roomImageUrls}
    />
  );
};

export default ReservationDetailPage;
