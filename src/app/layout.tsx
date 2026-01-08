import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virendra Yadav | Backend Engineer & Distributed Systems Expert",
  description:
    "Portfolio of Virendra Yadav, a Backend Engineer at Cohesity skilled in building high-performance systems and distributed components.",
  keywords: [
    "Backend Engineer",
    "Distributed Systems",
    "Python",
    "C++",
    "Cohesity",
    "System Design",
    "developer portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
