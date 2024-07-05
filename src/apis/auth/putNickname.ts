import to from "@/utils/awaitToFetch";
import { AuthErrorCode } from "./error";

interface NicknameData {
  nickname: string;
}

interface EmailLoginResponseBody {
  body: string;
}

export const putNickname = async (registerData: NicknameData) => {
  const baseUrl = `https://api.miniteam2.store/api/auth/nickname`;

  return await to<EmailLoginResponseBody, AuthErrorCode>(
    fetch(baseUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
      body: JSON.stringify(registerData),
    }),
  );
};
