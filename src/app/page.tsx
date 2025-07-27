import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Welcome to the Simple Bank</h1>
      <p>Your one-stop solution for all banking needs.</p>
      <Link href="/about">Learn more about us</Link>
    </section>
  );
}
