"use client";

import LikeEmpty from "@/components/Like/LikeEmpty";
import LikeList from "@/components/Like/LikeList";
import Pagination from "@/components/Pagination";
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
        const url = `https://api.miniteam2.store/api/likes`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
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
        <LikeEmpty />
      )}
    </>
  );
};

export default Like;
