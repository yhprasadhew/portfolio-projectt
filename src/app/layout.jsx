import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YH Prasad | Full Stack Developer Portfolio",
  description: "Professional portfolio of YH Prasad, a Software Engineering student and Full Stack Developer specializing in Next.js, React, Node.js, and PostgreSQL. Explore my projects and experience.",
  keywords: ["YH Prasad", "Software Engineer", "Full Stack Developer", "React Developer", "Next.js Portfolio", "Developer Portfolio"],
  authors: [{ name: "YH Prasad" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
