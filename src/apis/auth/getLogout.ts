import to from "@/utils/awaitToFetch";
import { AuthErrorCode } from "./error";

export const getLogout = async () => {
  const baseUrl = `https://api.miniteam2.store/api/auth/logout`;

  return await to<AuthErrorCode>(
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
