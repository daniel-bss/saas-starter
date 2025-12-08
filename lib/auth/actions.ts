import { z } from "zod";

export type ActionState = {
  error?: string;
  // success?: string;
  username?: string;
  password?: string;
  [key: string]: any; // This allows for additional properties
};

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData
) => Promise<T>;

export function validatedAction<S extends z.ZodType<any, any>, T>(
  schema: S,
  action: ValidatedActionFunction<S, T>
) {
  return async (prevState: ActionState, formData: FormData) => {
    const result = schema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      // const error = result.error;
      return {
        error: "Invalid credentials",
      };
    }

    return action(result.data, formData);
  };
}
