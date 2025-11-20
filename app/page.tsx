"use client";

import AlliancesCarousel from "@/components/alliances-carousel";
import GateOverlay from "@/components/gateoverlay";
import { AllianceCarouselItem } from "@/types";
import { useState } from "react";

const dummyAlliances: AllianceCarouselItem[] = [
  {
    name: "ABC",
  },
  {
    name: "DEF",
  },
  {
    name: "GHI",
  },
  {
    name: "JKL",
  },
  {
    name: "MNO",
  },
  {
    name: "PQR",
  },
  {
    name: "STU",
  },
  {
    name: "VWX",
  },
  {
    name: "123",
  },
  {
    name: "456",
  },
  {
    name: "789",
  },
];

export default function Page() {
  let [firstLanding, setFirstLanding] = useState<boolean>(true);

  return (
    <>
      {/* FIRST LANDING */}
      {!firstLanding && (
        <GateOverlay
          firstLanding={firstLanding}
          setFirstLanding={setFirstLanding}
        />
      )}

      {/* HOME */}
      <div className="container pt-[90px] h-[3000px] flex flex-col justify-start items-center">
        <div className="font-bold text-3xl text-surface-25 tracking-wider">
          WOS STATE #2128
        </div>

        <div className="text-secondary font-bold mt-4 mb-4">
          Hub for alliance news, lore, guides, and strategy. Collaborators: add
          anything you like, from stories to tips
        </div>

        {/* ALLIANCES */}
        <div className="card w-full flex flex-col justify-start items-start">
          <div className="text-surface-25 text-xl font-bold mb-8">
            Alliances
          </div>

          <AlliancesCarousel items={dummyAlliances} />
        </div>

        {/* NEWS & BATTLE UPDATES */}
      </div>
    </>
  );
}
