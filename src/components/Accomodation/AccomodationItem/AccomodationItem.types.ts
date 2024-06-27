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
}

export interface AccomodationItemProps {
  accomodationItem: AccomodationItem;
}
