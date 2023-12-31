import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { newPageData } from "@/config/newPageData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-green-100 flex justify-between items-center px-48 py-4">
          <ul>
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
          </ul>
          <ul className="flex gap-4">
            {newPageData.pages.map((page) => (
              <li
                className="bg-green-800 text-gray-100 px-4 py-1 rounded-sm"
                key={page.path}
              >
                <Link href="[...slug]" as={page.path}>
                  <p>{page.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
