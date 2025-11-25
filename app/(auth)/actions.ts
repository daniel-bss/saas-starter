import { z } from "zod";
import { validatedAction } from "@/lib/auth/actions";
import { redirect } from "next/navigation";
import { signIn } from "@/lib/api/fetcher";
import { signInSchema, signUpSchema } from "@/lib/api/types";

export const k_SIGNIN = "signin";
export const k_SIGNUP = "signup";

export const signInAction = validatedAction(
  signInSchema,
  async (data, formData) => {
    const res = await signIn(data);
    console.log("DONEEE");
    console.log(res);

    // TODO:
    // res.

    // return {
    //   username: "haha@asda.com",
    //   password: "lslslslslsl",
    // };
    console.log("HOAHWOWAKOAKW");

    //   console.log(object);

    //   const userWithTeam = await db
    //     .select({
    //       user: users,
    //       team: teams,
    //     })
    //     .from(users)
    //     .leftJoin(teamMembers, eq(users.id, teamMembers.userId))
    //     .leftJoin(teams, eq(teamMembers.teamId, teams.id))
    //     .where(eq(users.email, email))
    //     .limit(1);

    //   if (userWithTeam.length === 0) {
    //     return {
    //       error: "Invalid email or password. Please try again.",
    //       email,
    //       password,
    //     };
    //   }

    //   const { user: foundUser, team: foundTeam } = userWithTeam[0];

    //   const isPasswordValid = await comparePasswords(
    //     password,
    //     foundUser.passwordHash
    //   );

    //   if (!isPasswordValid) {
    //     return {
    //       error: "Invalid email or password. Please try again.",
    //       email,
    //       password,
    //     };
    //   }

    // TODO??:
    //   await Promise.all([
    //     setSession(foundUser),
    //     logActivity(foundTeam?.id, foundUser.id, ActivityType.SIGN_IN),
    //   ]);

    // TODO:
    //   const redirectTo = formData.get("redirect") as string | null;
    //   if (redirectTo === "checkout") {
    //     const priceId = formData.get("priceId") as string;
    //     return createCheckoutSession({ team: foundTeam, priceId });
    //   }

    //   redirect("/admin");
  }
);

// TODO: signup

export const signUpAction = validatedAction(
  signUpSchema,
  async (data, formData) => {}
);
