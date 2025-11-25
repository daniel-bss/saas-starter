"use client";

import { Suspense } from "react";
import { Auth } from "../auth";
import { k_SIGNIN } from "../actions";

export default function Page() {
  return (
    <Suspense>
      <Auth mode={k_SIGNIN} />
    </Suspense>
  );
}
