import Navbar from "@/components/admin/navbar";
import Sidenav from "@/components/admin/sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* <div className="w-full flex-none md:w-64"> */}
      <div className="flex-none w-56">
        <Sidenav />
      </div>
      {/* <div className="grow p-6 md:overflow-y-auto md:p-12"> */}
      <div className="grow overflow-y-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
