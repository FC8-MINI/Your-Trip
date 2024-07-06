import to from "@/utils/awaitToFetch";
import { AuthErrorCode } from "./error";

export const delelteAuthWithDraw = async () => {
  const baseUrl = `https://api.miniteam2.store/api/auth/withdraw`;

  return await to<{}, AuthErrorCode>(
    fetch(baseUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
    }),
  );
};
