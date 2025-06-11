import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { FloatingBadge } from "@/components/floating-badge";

export const metadata: Metadata = {
  title: "James Piastro",
  description: "Full Stack Developer · Tech Enthusiast",
  icons: {
    icon: '/JP.jpg',
    shortcut: '/JP.jpg',
    apple: '/JP.jpg',
  }
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <FloatingBadge />
      </body>
    </html>
  );
}
