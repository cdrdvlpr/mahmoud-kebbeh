import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="links">
      <Link href="/" className={router.pathname == "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/projects"
        className={router.pathname == "/projects" ? "active" : ""}
      >
        Projects
      </Link>
      <Link
        href="/about"
        className={router.pathname == "/about" ? "active" : ""}
      >
        About
      </Link>
    </nav>
  );
}
