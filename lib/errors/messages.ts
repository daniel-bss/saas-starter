import { ErrorCode } from "./codes";

export const ERROR_MESSAGES: Record<ErrorCode | string, string> = {
  "user not found": "Invalid credentials",
  "TODO: OTHER": "Something's wrong (TODO)",
  UNKNOWN_ERROR: "Something's wrong",
};
