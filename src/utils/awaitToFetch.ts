/*
  Inspired by await-to-js
  https://github.com/scopsy/await-to-js
*/

import { AccommodationErrorCode } from "@/apis/accommodationList/error";
import { AuthErrorCode } from "@/apis/auth/error";

const successResultCodes = [
  "OK",
  "CREATED",
  "DELETE",
  "NICKNAME_UPDATED",
  "TOKEN_REFRESHED",
  "LOGOUT",
  "WITHDRAW",
  "REGISTER",
  "LOGIN",
] as const;

export type SuccessResultCode = (typeof successResultCodes)[number];

export type CartErrorCode =
  | "CART_NOT_FOUND"
  | "ROOM_NOT_FOUND"
  | "MEMBER_NOT_FOUND"
  | "RESERVATION_NOT_FOUND"
  | "RESERVATION_NOT_IN_CART"
  | "EXCEEDS_MAX_GUESTS"
  | "DUPLICATE_RESERVATION"
  | "RESERVATION_NOT_PENDING"
  | "RESERVATION_NOT_BELONGS_TO_USER"
  | "INVALID_CHECKOUT_DATE"
  | "CONFLICTING_RESERVATION"
  | "RESERVATION_MISMATCH";

export type LikeErrorCode = "MEMBER_NOT_FOUND" | "ACCOMODATION_NOT_FOUND";

export type ReservationErrorCode =
  | "RESERVATION_NOT_FOUND"
  | "NO_ROOMS_AVAILABLE"
  | "MEMBER_NOT_FOUND"
  | "OVERLAPPING_RESERVATION"
  | "ROOM_NOT_FOUND"
  | "EXCEEDS_MAX_GUESTS"
  | "INVALID_CHECKOUT_DATE"
  | "CONFLICTING_RESERVATION"
  | "DUPLICATED_RESERVATION";

export type ReviewErrorCode =
  | "MEMBER_NOT_FOUND"
  | "ACCOMODATION_NOT_FOUND"
  | "RESERVATION_NOT_FOUND"
  | "INVALID_REVIEW_DATE"
  | "INVALID_REVIEW_STAR"
  | "EMPTY_REVIEW_COMMENT"
  | "DUPLICATE_REVIEW";

export type ErrorCode =
  | AccommodationErrorCode
  | AuthErrorCode
  | CartErrorCode
  | LikeErrorCode
  | ReservationErrorCode
  | ReviewErrorCode
  | "UNKNOWN_ERROR";

export interface ResponseResult<C> {
  result: {
    resultCode: C | string;
    resultMessage: string;
    resultDescription: string;
  };
}

export default async function to<B = {}, E extends ErrorCode = ErrorCode>(
  promise: Promise<Response>,
): Promise<[ResponseResult<E>, null] | [null, ResponseResult<SuccessResultCode> & B]> {
  try {
    const response = await promise;
    const data = await response.json();
    console.log(data);
    if (successResultCodes.includes(data.result.resultCode)) {
      return [null, data] as [null, ResponseResult<SuccessResultCode> & B];
    } else {
      return [data, null] as [ResponseResult<E>, null];
    }
  } catch (error) {
    if (error instanceof Error) {
      return [
        {
          result: {
            resultCode: "FETCH_ERROR",
            resultMessage: error.name,
            resultDescription: error.message,
          },
        } as ResponseResult<E>,
        null,
      ];
    }

    return [
      {
        result: {
          resultCode: "UNKNOWN_ERROR",
          resultMessage: "UNKNOWN_ERROR",
          resultDescription: "알 수 없는 오류가 발생했습니다.",
        },
      } as ResponseResult<E>,
      null,
    ];
  }
}
