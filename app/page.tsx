"use client";

import GateOverlay from "@/components/gateoverlay";
import { Button } from "@/components/ui/button";

export default function Page() {
  let firstLanding = true;

  return (
    <div className="bg-yellow-50">
      {/* <Button>Click me</Button> */}
      <div className="">hoho</div>
      {firstLanding && <GateOverlay />}
    </div>
  );
}
