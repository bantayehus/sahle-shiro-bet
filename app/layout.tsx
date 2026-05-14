// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sahle Shiro Bet | Best Ethiopian Food in Addis Ababa",
  description: "Authentic Ethiopian Shiro, Tibs, Kitfo & Traditional Dishes - Sahle Shiro Bet",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-gray-950 text-gray-100`}>
        {children}
      </body>
    </html>
  );
}