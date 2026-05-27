import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">

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
    </nav>
  );
}
