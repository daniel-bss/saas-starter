import { z } from "zod";
import { validatedAction } from "@/lib/auth/actions";
import { redirect } from "next/navigation";

const signInSchema = z.object({
  username: z.string().min(3).max(255), // TODO: validasi dengan rules BE
  password: z.string().min(8).max(100),
});

export const signIn = validatedAction(signInSchema, async (data, formData) => {
  const { username, password } = data;

  // >> HIT API with { email, password }
  const res = await fetch("http://localhost:8080/v1/login_user", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  console.log((await res.json()).access_token);
  // TODO:

  return {
    email: "haha@asda.com",
    password: "lslslslslsl",
  };

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
});
