"use client";

import { useEffect, useState } from "react";
import AccomodationDetail from "@/components/Accomodation/AccomodationDetail";
import { AccomodationItem } from "@/components/Accomodation/AccomodationItem";
import { AccomodationRoomList } from "@/components/Accomodation/AccomodationRoomList";
import Loading from "@/components/Loading";

const Accomodation = ({ params: { id } }: { params: { id: string } }) => {
  const [data, setData] = useState<{
    accomodation: AccomodationItem;
    rooms: AccomodationRoomList[];
    liked: boolean;
  } | null>(null);

  useEffect(() => {
    const fetchAccomodation = async () => {
      try {
        const url = `https://api.miniteam2.store/api/accommodation/${id}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("데이터를 가져오는데 실패했습니다.");
        }

        const { body: data } = await response.json();

        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAccomodation().catch((error) => {
      console.error("Error in addToCart:", error);
    });
  }, [id]);

  if (data) {
    return (
      <AccomodationDetail
        accomodationDetail={data.accomodation}
        accomodationRoomItems={data.rooms}
        accomodationLike={data.liked}
      />
    );
  } else {
    return <Loading />;
  }
};

export default Accomodation;
