import to from "@/utils/awaitToFetch";
import { AuthErrorCode, authErrorCodes } from "./error";

interface RegisterData {
  name: string;
  nickname: string;
  email: string;
  password: string;
}

interface RegisterResponseBody {
  body: string;
}

export const postRegister = async (registerData: RegisterData) => {
  const baseUrl = `https://api.miniteam2.store/api/auth/register`;

  return await to<RegisterResponseBody, AuthErrorCode>(
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    }),
    authErrorCodes,
  );
};
