"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6 border-b border-gray-800">

      <h1 className="text-2xl font-bold">
        AURORA
      </h1>

      <ul className="flex gap-6 text-lg">

        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>

      </ul>

      <Link href="/cart">
        Cart ({cartItems.length})
      </Link>
    </nav>
  );
}
