import to from "@/utils/awaitToFetch";
import { ReservationErrorCode } from "./error";

interface ReservationData {
  roomId: number;
  peopleNumber: number;
  checkIn: string;
  checkOut: string;
}

export const postReservation = async (registerData: ReservationData) => {
  const baseUrl = `https://api.miniteam2.store/api/reservation`;

  return await to<{}, ReservationErrorCode>(
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
      body: JSON.stringify(registerData),
    }),
  );
};
