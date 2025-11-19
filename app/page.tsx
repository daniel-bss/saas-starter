"use client";

import GateOverlay from "@/components/gateoverlay";
import { useState } from "react";

export default function Page() {
  let [firstLanding, setFirstLanding] = useState<boolean>(false);

  return (
    <div className="bg-yellow-50">
      {/* <Button>Click me</Button> */}
      <div className="">hoho</div>
      {!firstLanding && (
        <GateOverlay
          firstLanding={firstLanding}
          setFirstLanding={setFirstLanding}
        />
      )}
    </div>
  );
}
