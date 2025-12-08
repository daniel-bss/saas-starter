type ErrorCode =
  | "user not found"
  | "incorrect password"
  | "UNKNOWN_ERROR"
  | "TODO: OTHER";

export const ERROR_MESSAGES: Record<ErrorCode | string, string> = {
  "user not found": "Invalid credentials",
  "incorrect password": "Invalid credentials",
  "TODO: OTHER": "Something's wrong (TODO)",
  UNKNOWN_ERROR: "Something's wrong",
};
