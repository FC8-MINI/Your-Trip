"use client";

import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import Reservation from "@/components/Reservation";
import ReservationEmpty from "@/components/Reservation/ReservationEmpty";

interface ReservationProps {
  searchParams: {
    page?: string;
  };
}

const ReservationPage = ({ searchParams: { page } }: ReservationProps) => {
  const [reservationItems, setReservationItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const url = `https://api.miniteam2.store/api/reservation`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          cache: "no-store",
        });
        const { body } = await response.json();

        setReservationItems(body.content);
        setTotalPages(body.totalPages);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservation().catch((error) => {
      console.error("Error in fetchReservations:", error);
    });
  }, [page]);

  return (
    <>
      {reservationItems.length > 0 ? (
        <>
          <Reservation reservationItems={reservationItems} />
          <Pagination maxPage={totalPages} nowPage={Number(page) || 1} />
        </>
      ) : (
        <ReservationEmpty />
      )}
    </>
  );
};

export default ReservationPage;
