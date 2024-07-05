import to from "@/utils/awaitToFetch";
import { AuthErrorCode } from "./error";

interface UserInfoResponseBody {
  body: {
    name: string;
    nickname: string;
    email: string;
  };
}

export const getUserInfo = async () => {
  const baseUrl = `https://api.miniteam2.store/api/auth/userInfo`;

  return await to<UserInfoResponseBody, AuthErrorCode>(
    fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
    }),
  );
};
