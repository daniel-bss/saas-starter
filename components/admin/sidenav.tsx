"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: {
  name: string;
  href: string;
}[] = [
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Alliances",
    href: "/alliances",
  },
  {
    name: "Presidents",
    href: "/presidents",
  },
  {
    name: "Players",
    href: "/players",
  },
];

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-primary px-4 border-r-[1px] border-black">
      {/* LOGO */}
      <Link
        href={"/admin"}
        className="flex flex-row justify-start items-center ml-3.5 gap-3 mt-6"
      >
        <Image src="/icons/favicon.svg" alt="" width={58} height={58} />
        <div className="flex flex-col justify-start items-center mb-1">
          <div className="text-xl text-white font-bold tracking-wider">
            Havlabs
          </div>
          <span className="bg-surface-25 rounded-full py-0.5 px-2 text-center font-bold text-xs">
            admin
          </span>
        </div>
      </Link>

      <div className="h-[0.5px] bg-surface-200 my-7"></div>

      {links.map((link, i) => (
        <Link
          key={`${i}${link}`}
          href={`/admin${link.href}`}
          className={clsx(
            "p-2 rounded-md mb-4 font-semibold pl-3 hover:border-surface-25",
            {
              "bg-secondary-100 text-primary": pathname.startsWith(
                `/admin${link.href}`
              ),
            },
            {
              "text-surface-50": !pathname.startsWith(`/admin${link.href}`),
            }
          )}
        >
          {link.name}
        </Link>
      ))}

      {/* TODO: LOGOUT HERE OR NAVBAR ? */}
      {/* <div className="bg-red-200">asdasd</div>
      <div className="bg-red-200">asdasd</div>
      <div className="bg-red-200">asdasd</div> */}

      {/* <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form> */}
    </div>
  );
}
