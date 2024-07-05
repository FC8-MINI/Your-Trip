import to from "@/utils/awaitToFetch";
import { CartErrorCode } from "./error";
import { ReservationErrorCode } from "../reservation/error";

interface CartReservationData {
  reservationId: number;
  roomId: number;
  peopleNumber: number;
  checkIn: string;
  checkOut: string;
}

export const putCartReservation = async (registerData: CartReservationData) => {
  const baseUrl = `https://api.miniteam2.store/api/cart`;

  return await to<{}, CartErrorCode | ReservationErrorCode>(
    fetch(baseUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
      body: JSON.stringify(registerData),
    }),
  );
};
