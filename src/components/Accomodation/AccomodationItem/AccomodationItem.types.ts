export interface DescriptionAvailableProps {
  $available: boolean;
}

export interface AccomodationItem {
  id: number;
  name: string;
  description: string;
  postalCode: number;
  address: string;
  parkingAvailable: boolean;
  cookingAvailable: boolean;
  checkIn: string;
  checkOut: string;
  category: string;
  minPrice: number;
  reservationAvailable: boolean;
}

export interface AccomodationItemProps {
  accomodationItem: AccomodationItem;
}

export interface DescriptionPriceProps {
  $reservationAvailable: boolean;
}
