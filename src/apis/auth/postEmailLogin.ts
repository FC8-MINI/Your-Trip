import to from "@/utils/awaitToFetch";
import { AuthErrorCode } from "./error";

interface EmailLoginrData {
  email: string;
  password: string;
}

interface EmailLoginResponseBody {
  body: {
    state: string;
    accessToken: string;
    refreshToken: string;
  };
}

export const postEmailLogin = async (registerData: EmailLoginrData) => {
  const baseUrl = `https://api.miniteam2.store/api/auth/login`;

  return await to<EmailLoginResponseBody, AuthErrorCode>(
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
      body: JSON.stringify(registerData),
    }),
  );
};
