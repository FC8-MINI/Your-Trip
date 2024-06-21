import { StaticImageData } from "next/image";

export interface ReservationProps {
  id: number;
  name: string;
  roomName: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  price: number;
  image: StaticImageData;
}

export interface ReservationListProps {
  reservations: ReservationProps[];
}
