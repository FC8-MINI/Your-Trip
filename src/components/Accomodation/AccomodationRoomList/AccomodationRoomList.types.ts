import { StaticImageData } from "next/image";

export interface RoomProps {
  id: number;
  name: string;
  maxPerson: number;
  minPerson: number;
  extraPrice: number;
  totalPrice: number;
  image: StaticImageData;
}

export interface AccomodationRoomListProps {
  rooms: RoomProps[];
}
