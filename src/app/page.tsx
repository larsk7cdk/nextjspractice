import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="text-4xl ">Home Page</h1>
      <Link href='/blog'>Blog Page</Link>
    </div>)
}
