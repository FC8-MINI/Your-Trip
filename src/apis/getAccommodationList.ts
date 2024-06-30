import { AccomodationItem } from "@/components/Accomodation/AccomodationItem";
import { CategoryType } from "@/components/Category/Category.types";
import to from "@/utils/awaitToFetch";

interface AccommodationListFilter {
  category?: CategoryType;
  name?: string;
  checkIn?: string;
  checkOut?: string;
  page?: number;
}

interface AccommodationListResponse {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDescription: string;
  };
  body: {
    totalPages: number;
    totalElements: number;
    content: AccomodationItem[];
  };
}

interface AccommodationListError {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDescription: string;
  };
}

export const getAccommodationList = async ({
  category = "전체",
  name = "",
  checkIn = "",
  checkOut = "",
  page = 1,
}: AccommodationListFilter = {}): Promise<[AccommodationListError, null] | [null, AccommodationListResponse]> => {
  const baseUrl = `https://api.miniteam2.store/api/${category && category !== "전체" ? "category?" : "accommodation?"}`;

  let query = "";

  if (category && category !== "전체") {
    query += `${query && "&"}region=${category}`;
  }

  // if(name) {
  //   query += `${query && "&"}region=${name}`
  // }

  if (checkIn) {
    query += `${query && "&"}check-in=${checkIn}`;
  }

  if (checkOut) {
    query += `${query && "&"}check-out=${checkOut}`;
  }

  if (page) {
    query += `${query && "&"}page=${page}`;
  }

  return await to<AccommodationListResponse, AccommodationListError>(
    fetch(baseUrl + query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }),
  );
};
