import to from "@/utils/awaitToFetch";
import { AuthErrorCode, authErrorCodes } from "./error";

export const postLogout = async () => {
  const baseUrl = `https://api.miniteam2.store/api/auth/logout`;

  return await to<AuthErrorCode>(
    fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }),
    authErrorCodes,
  );
};
