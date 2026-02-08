import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Repetition: Mother of Mastery — A Five-Book Series by Ketan Shukla",
  description:
    "A five-book journey from the science of repetition to the mastery of life. Discover the neuroscience, habits, real-world proof, cognitive techniques, and life integration that transform ordinary practice into extraordinary mastery.",
  keywords: [
    "repetition",
    "mastery",
    "deliberate practice",
    "habit formation",
    "neuroplasticity",
    "self-improvement",
    "book series",
    "Ketan Shukla",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${garamond.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
