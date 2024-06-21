import { StaticImageData } from "next/image";

export interface ReservationProps {
  id: number;
  image: StaticImageData;
  name: string;
  roomName: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  price: number;
  extraPrice: number;
}

export interface ReservationListProps {
  reservations: ReservationProps[];
}
