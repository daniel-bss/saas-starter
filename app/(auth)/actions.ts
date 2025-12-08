import { z } from "zod";
import { validatedAction } from "@/lib/auth/actions";
import { redirect } from "next/navigation";
import { signIn } from "@/lib/api/fetcher";
import { signInSchema, signUpSchema } from "@/lib/types/types";
import { error } from "console";
import { setSession } from "@/lib/auth/session";
import { User } from "@/lib/types/user";
import { fromTheme } from "tailwind-merge";
import { ERROR_MESSAGES } from "@/lib/errors/errmap";

export const k_SIGNIN = "signin";
export const k_SIGNUP = "signup";

export const signInAction = validatedAction(
  signInSchema,
  async (data, formData) => {
    const res = await signIn(data);

    console.log(res);

    if (res.message) {
      return {
        error: ERROR_MESSAGES[res.message],
        username: data.username,
        password: data.password,
      };
    }

    redirect("/admin");
  }
);

// TODO: signup

export const signUpAction = validatedAction(
  signUpSchema,
  async (data, formData) => {}
);
