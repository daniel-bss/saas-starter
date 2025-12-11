"use client";

import AlliancesCarousel from "@/components/alliances-carousel";
import GateOverlay from "@/components/gateoverlay";
import { formatDateWithSlash } from "@/lib/date";
import { AllianceCarouselItem, NewsItem } from "@/types";
import { useEffect, useState } from "react";

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

const dummyNews: NewsItem[] = [
  {
    title:
      "Jinx Returns, Insults Three People and a Mod — Whales Drops Bombshell Era on Sight",
    date: new Date(),
    body: "JJinx vanished for eight months without warning, then returned like nothing happened and immediately offended three people and a moderator. Whales, just seven days into her so-called bombshell era, abandoned self-improvement the moment Jinx sat down. No journaling. No manifestation. She lit a cigar and asked, “Okay, who do we take out first?” — Catty von Catacean reportinginx vanished for eight months without warning, then returned like nothing happened and immediately offended three people and a moderator. Whales, just seven days into her so-called bombshell era, abandoned self-improvement the moment Jinx sat down. No journaling. No manifestation. She lit a cigar and asked, “Okay, who do we take out first?” — Catty von Catacean reporting",
  },
  { title: "Title B", date: new Date(), body: "asjdnakjsdnkjasnd" },
  {
    title: "BREAKING — Granny Beelzebub Goes Full Rambo",
    date: new Date(),
    body: "With Whaleslaughter temporarily convinced she’s a sweet and sexy bombshell, Granny Beelzebub has taken over as HAVOC’s frontline muscle. Witnesses describe her as ‘pure sinew and divine fury,’ storming through snowdrifts with the energy of a retired general who finally snapped. Asked about her new role, she growled, ‘Somebody’s gotta keep order.’ HAVOC leadership remains in turmoil. — Catty von Catacean reporting",
  },
  { title: "Title D", date: new Date(), body: "asjdnakjsdnkjasnd" },
  { title: "Title E", date: new Date(), body: "asjdnakjsdnkjasnd" },
  { title: "Title F", date: new Date(), body: "asjdnakjsdnkjasnd" },
  { title: "Title G", date: new Date(), body: "asjdnakjsdnkjasnd" },
  { title: "Title H", date: new Date(), body: "asjdnakjsdnkjasnd" },
  { title: "Title I", date: new Date(), body: "asjdnakjsdnkjasnd" },
  { title: "Title K", date: new Date(), body: "asjdnakjsdnkjasnd" },
  { title: "Title L", date: new Date(), body: "asjdnakjsdnkjasnd" },
];

export default function Page() {
  let [firstLanding, setFirstLanding] = useState<boolean>(false);

  return (
    <>
      {/* FIRST LANDING */}
      {firstLanding ? (
        <GateOverlay
          firstLanding={firstLanding}
          setFirstLanding={setFirstLanding}
        />
      ) : (
        <div className="container pt-[90px] flex flex-col justify-start items-center">
          {/* HOME */}
          <div className="font-bold text-[26px] text-surface-25 tracking-wide">
            WOS STATE #2128
          </div>

          <div className="text-secondary font-bold mt-4 mb-4">
            Hub for alliance news, lore, guides, and strategy. Collaborators:
            add anything you like, from stories to tips
          </div>

          {/* ALLIANCES */}
          <div className="card w-full flex flex-col justify-start items-start">
            <div className="text-surface-25 text-xl font-bold mb-4">
              Alliances
            </div>

            <AlliancesCarousel items={dummyAlliances} />
          </div>

          {/* NEWS & BATTLE UPDATES */}
          <div className="card w-full flex flex-col justify-start items-start">
            <div className="text-surface-25 text-xl font-bold mb-4">
              News & Battle Updates
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-6 w-full">
              {dummyNews.map((newsItem, i) => (
                // TODO: use id for key
                <div
                  key={i}
                  className="bg-[#10131e] p-3 w-full h-[650px] rounded-xl border-[1px] border-[#ffffff14]"
                >
                  <div className="bg-green-200 w-full h-[174px] mb-3">
                    {/* TODO: Image, aspect ratio, fit */}
                  </div>

                  <div className="text-surface-25 font-bold text-lg/[20px] mb-3">
                    {newsItem.title}
                  </div>

                  <div className="text-secondary text-xs mb-3">
                    {formatDateWithSlash(newsItem.date)}
                  </div>

                  <div className="news-body">{newsItem.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
