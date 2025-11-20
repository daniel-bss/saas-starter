import Link from "next/link";

const links: {
  name: string;
  href: string;
}[] = [
  { name: "Home", href: "/" },
  { name: "Players", href: "/players" },
  { name: "NUT Rules", href: "/nut-rules" },
  { name: "Presidents", href: "/presidents" },
  { name: "Brothers in Arms", href: "/bia" },
];

export default function Navbar() {
  return (
    <div className="navbar">
      {/* TODO: #2128, large size  */}

      {links.map((l) => (
        <Link key={l.name} href={l.href}>
          {l.name}
        </Link>
      ))}
    </div>
  );
}
