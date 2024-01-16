import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-semibold">Food Explorer website</h1>
      <p><Link href="/about">About Us</Link></p>
      <p><Link href="/blogs">Blogs</Link></p>
    </main>
  );
}
