export type AccommodationErrorCode =
  | "PAGE_NOT_FOUND"
  | "RESOURCE_NOT_FOUND"
  | "INVALID_ROOM_REQUEST"
  | "INVALID_CATEGORY_CODE_REQUEST";

export const accommodationErrorCodes: Record<string, AccommodationErrorCode> = {
  "존재하지 않는 페이지 번호입니다.": "PAGE_NOT_FOUND",
  "요청한 리소스를 찾을 수 없습니다.": "RESOURCE_NOT_FOUND",
  "숙소에 해당 객실이 존재하지 않습니다.": "INVALID_ROOM_REQUEST",
  "요청 카테고리 값이 유효하지 않습니다.": "INVALID_CATEGORY_CODE_REQUEST",
};
