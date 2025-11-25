// import { API_BASE_URL } from "./config";

import z from "zod";
import { BaseResponse, SignInResponse, signInSchema } from "./types";

const k_GET = "GET";
const k_POST = "POST";
const k_PUT = "PUT";
const k_DELETE = "DELETE";

const API_BASE_URL = "http://localhost:8080/v1";

async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    cache: "no-store", // optional, makes it always fresh
  });

  return res.json() as Promise<T>;
}

export async function signIn(b: z.infer<typeof signInSchema>) {
  return fetcher<BaseResponse<SignInResponse>>("/login_user", {
    method: k_POST,
    body: JSON.stringify(b),
  });
}
