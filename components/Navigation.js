import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-end">
      <Link href="/" className="px-2 py-1 rounded-md hover:bg-gray-400 mr-4">
        ABOUT
      </Link>
      <Link href="/blog" className="px-2 py-1 rounded-md hover:bg-gray-400">
        BLOG
      </Link>
    </nav>
  );
}
