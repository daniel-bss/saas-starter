"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

import { k_SIGNIN, k_SIGNUP, signInAction, signUpAction } from "./actions";
import { ActionState } from "@/lib/auth/actions";

export function Auth({
  mode = k_SIGNIN,
}: {
  mode?: typeof k_SIGNIN | typeof k_SIGNUP;
}) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === k_SIGNIN ? signInAction : signUpAction,
    { error: "" } // initial state
  );

  return (
    <div className="min-h-[100dvh] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 pb-[100px]">
      {/* <div className="px-10 pt-24 pb-20 w-[500px] rounded-3xl bg-gray-100"> TODO: ADJUST IN MAC */}
      <div className="px-10 pt-12 pb-10 w-[400px] rounded-3xl bg-gray-100">
        {/* TODO: 1280 x 632 */}

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-700 select-none">
            {/* {mode === k_SIGNIN ? "Welcome home, Master..." : "Register"} */}
            {mode === k_SIGNIN ? "x" : "Register"}
          </h2>
        </div>
        <div className="mt-14 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action={formAction}>
            <input type="hidden" name="redirect" value={redirect || ""} />
            <div>
              <Label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </Label>
              <div className="mt-1">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  defaultValue="admin"
                  // defaultValue={state.username}
                  required
                  maxLength={50}
                  className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  // autoComplete={
                  //   mode === k_SIGNIN ? "current-password" : "new-password"
                  // }
                  // defaultValue={state.password}
                  defaultValue="Q!qwe123"
                  required
                  minLength={8}
                  maxLength={100}
                  className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {state?.error && (
              <div className="absolute mt-[-12px] truncate text-red-500 text-sm max-w-[320px]">
                {state.error}
              </div>
            )}

            <div>
              <Button
                type="submit"
                className="w-full select-none mt-12 flex justify-center items-center py-5 px-4 border border-transparent rounded-full shadow-sm font-medium text-lg text-white bg-secondary hover:bg-secondary-100  disabled:cursor-default hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
                disabled={pending}
              >
                {pending ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    Loading...
                  </>
                ) : mode === k_SIGNIN ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>

          {/* New to our platform? */}
          {/* <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                {mode === k_SIGNIN
                  ? "New to our platform?"
                  : "Already have an account?"}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href={`${mode === k_SIGNIN ? `/${k_SIGNIN}` : `/${k_SIGNUP}`}`}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              {mode === k_SIGNIN
                ? "Create an account"
                : "Sign in to existing account"}
            </Link>
          </div> 
        </div> */}
        </div>
      </div>
    </div>
  );
}
