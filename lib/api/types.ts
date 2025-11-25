import { z } from "zod";
import { ErrorCode } from "../errors/codes";

export const signInSchema = z.object({
  username: z.string().min(3).max(255), // TODO: validasi dengan rules BE
  password: z.string().min(8).max(100),
});

export const signUpSchema = z.object({
  // email: z.string().email(),
  // password: z.string().min(8),
  // inviteId: z.string().optional(),
});

// RESPONSES

export type BaseResponse<T> = {
  data?: T;
  error?: {
    code: string;
    message: string | ErrorCode;
  };
};

export type SignInResponse = {
  user: {
    username: string;
    full_name: string;
    email: string;
    password_changed_at: Date;
    created_at: Date;
  };
  session_id: string;
  access_token: string;
  refresh_token: string;
  access_token_expires_at: Date;
  refresh_token_expires_at: Date;
};
