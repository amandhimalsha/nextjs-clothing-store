import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>AURORA</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
