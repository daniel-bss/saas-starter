// TODO: import { API_BASE_URL } from "./config";

import z from "zod";
import { BaseResponse, SignInResponse, signInSchema } from "../types/types";

const k_GET = "GET";
const k_POST = "POST";
const k_PUT = "PUT";
const k_DELETE = "DELETE";

const API_BASE_URL = "http://localhost:8080";

async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    credentials: "include",
    cache: "no-store",
  });

  console.log(">>", res.headers);

  return res.json() as Promise<T>;
}

export async function signIn(b: z.infer<typeof signInSchema>) {
  return fetcher<BaseResponse<SignInResponse>>("/login", {
    method: k_POST,
    body: JSON.stringify(b),
  });
}

export async function refreshToken(token: string) {
  const res = await fetch(`${API_BASE_URL}/renew-token`, {
    headers: {
      "Content-Type": "application/json",
    },
    // credentials: "include",
    // cache: "no-store",
    body: JSON.stringify({
      refresh_token: token,
    }),
    method: k_POST,
  });

  const cookies = res.headers.getSetCookie();
  // cookies.forEach(c => )
  console.log(">>", cookies);

  // return res.json() as Promise<undefined>;
  return cookies;
}
