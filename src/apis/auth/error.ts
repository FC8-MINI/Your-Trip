export type AuthErrorCode =
  | "EMAIL_ALREADY_EXISTS"
  | "NAME_ALREADY_EXISTS"
  | "USER_NOT_FOUND"
  | "AUTHENTICATION_FAILED"
  | "PASSWORD_MISMATCH"
  | "INVALID_REFRESH_TOKEN"
  | "INVALID_TOKEN"
  | "INVALID_ACCESS_TOKEN"
  | "BLACKLISTED_TOKEN"
  | "REFRESH_TOKEN_NOT_FOUND"
  | "TOKEN_FETCH_FAILED";

export const authErrorCodes: Record<string, AuthErrorCode> = {
  "이미 존재하는 이메일입니다.": "EMAIL_ALREADY_EXISTS",
  "이미 존재하는 이름입니다.": "NAME_ALREADY_EXISTS",
  "사용자를 찾을 수 없습니다.": "USER_NOT_FOUND",
  "인가 코드를 받을 수 없습니다.": "AUTHENTICATION_FAILED",
  "비밀번호가 일치하지 않습니다.": "PASSWORD_MISMATCH",
  "유효하지 않은 리프레시 토큰입니다.": "INVALID_REFRESH_TOKEN",
  "유효하지 않은 토큰입니다.": "INVALID_TOKEN",
  "유효하지 않은 액세스 토큰입니다.": "INVALID_ACCESS_TOKEN",
  "블랙리스트에 등록된 토큰입니다.": "BLACKLISTED_TOKEN",
  "리프레쉬 토큰을 찾을 수 없습니다.": "REFRESH_TOKEN_NOT_FOUND",
  "토큰 요청에 실패했습니다.": "TOKEN_FETCH_FAILED",
};
