import to from "@/utils/awaitToFetch";
import { AuthErrorCode } from "./error";

interface IsLoggedInResponseBody {
  body: boolean;
}

export const getIsLoggedIn = async () => {
  const baseUrl = `https://api.miniteam2.store/api/auth/isLoggedIn`;

  return await to<IsLoggedInResponseBody, AuthErrorCode>(
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
