"use client";

import LikeList from "@/components/Like/LikeList";
import Pagination from "@/components/Pagination";
import ReservationEmpty from "@/components/Reservation/ReservationEmpty";
import { useEffect, useState } from "react";

interface LikeProps {
  searchParams: {
    page?: string;
  };
}

const Like = ({ searchParams: { page } }: LikeProps) => {
  const [likeItems, setLikeItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/like`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // cache: "no-store",
          // credentials: "include",
        });
        const { body } = await response.json();

        setLikeItems(body.content);
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
      {likeItems.length > 0 ? (
        <>
          <LikeList likeItems={likeItems} />
          <Pagination maxPage={totalPages} nowPage={Number(page) || 1} />
        </>
      ) : (
        <ReservationEmpty />
      )}
    </>
  );
};

export default Like;
