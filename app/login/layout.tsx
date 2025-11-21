import { inter } from "@/components/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} bg-primary`}>
      <body className="body-main-background">
        <div>
          <div>KOCAK</div>
          {children}
        </div>
      </body>
    </html>
  );
}
