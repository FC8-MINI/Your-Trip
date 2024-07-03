import { AccomodationItem } from "@/components/Accomodation/AccomodationItem";
import { CategoryType } from "@/components/Category/Category.types";
import to from "@/utils/awaitToFetch";
import { AccommodationErrorCode } from "./error";

interface AccommodationListFilter {
  category?: CategoryType;
  name?: string;
  checkIn?: string;
  checkOut?: string;
  page?: number;
}

interface AccommodationListBody {
  body: {
    totalPages: number;
    totalElements: number;
    content: AccomodationItem[];
  };
}

export const getAccommodationList = async ({
  category = "전체",
  name = "",
  checkIn = "",
  checkOut = "",
  page = 1,
}: AccommodationListFilter = {}) => {
  let query = "";

  if (category && category !== "전체") {
    query += `${query && "&"}region=${category}`;
  }

  if (name) {
    query += `${query && "&"}query=${name}`;
  }

  if (checkIn) {
    query += `${query && "&"}check-in=${checkIn}`;
  }

  if (checkOut) {
    query += `${query && "&"}check-out=${checkOut}`;
  }

  const baseUrl = `https://api.miniteam2.store/api/accommodation${query ? "/search?" : "?"}`;

  if (page) {
    query += `${query && "&"}page=${page}`;
  }

  return await to<AccommodationListBody, AccommodationErrorCode>(
    fetch(baseUrl + query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }),
  );
};
