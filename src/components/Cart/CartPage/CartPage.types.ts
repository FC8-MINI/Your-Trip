import { Cart } from "../CartItem/CartItem.types";

export interface APIResponse {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDescription: string;
  };
  body: {
    totalElements: number;
    totalPages: number;
    size: number;
    content: Cart[];
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    first: boolean;
    last: boolean;
    numberOfElements: number;
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    empty: boolean;
  };
}
