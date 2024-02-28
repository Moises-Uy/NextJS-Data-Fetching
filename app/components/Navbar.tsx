import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <h1>Portfolio</h1>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
      </nav>
    </>
  );
}
