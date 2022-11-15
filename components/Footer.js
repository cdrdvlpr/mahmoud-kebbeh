import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      Copyright &copy; 2020-{new Date().getFullYear()}.
      <Link href={"/about"}> Mahmoud Kebbeh</Link>, All rights reserved.
    </footer>
  );
}
