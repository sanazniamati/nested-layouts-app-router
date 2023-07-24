import React from "react";
import Link from "next/link";

function Navbar({}) {
  return (
    <nav className=" bg-gray-300 p-4">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
