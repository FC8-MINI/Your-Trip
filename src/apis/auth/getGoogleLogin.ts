import to from "@/utils/awaitToFetch";
import { AuthErrorCode } from "./error";

interface GoogleLoginResponseBody {
  body: {
    state: string;
    accessToken: string;
    refreshToken: string;
  };
}

export const getGoogleLogin = async () => {
  const baseUrl = `https://api.miniteam2.store/api/auth/google/login`;

  return await to<GoogleLoginResponseBody, AuthErrorCode>(
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
