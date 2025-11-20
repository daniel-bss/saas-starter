import { inter } from "@/components/ui/fonts";
import "./globals.css";
import type { Metadata, Viewport } from "next";
// import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from "swr";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "abc",
  // description: "Get started quickly with Next.js, Postgres, and Stripe.",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} bg-primary`}>
      <body className="min-h-[100dvh] pb-[100px] body-main-background">
        <SWRConfig
          value={{
            fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              // "/api/user": getUser(),
              // "/api/team": getTeamForUser(),
            },
          }}
        >
          <Navbar />
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
