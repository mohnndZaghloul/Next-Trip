"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLink_TP = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLink_TP) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`relative p-2 ${path.endsWith(href) ? "text-secondary" : null}`}>
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary ${path.endsWith(href) ? "scale-x-100" : "scale-x-0"} transition-transform duration-300`}
      />
    </Link>
  );
}
