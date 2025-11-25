import { Suspense } from "react";
import { Auth } from "../auth";
import { k_SIGNUP } from "../actions";

// TODO: setup signup page if NEEDED
export default function Page() {
  return (
    <Suspense>
      <Auth mode={k_SIGNUP} />
    </Suspense>
  );
}
