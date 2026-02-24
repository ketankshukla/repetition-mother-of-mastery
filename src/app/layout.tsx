import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import ImageProtection from "@/components/ImageProtection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://repetition.ketanshukla.com"),
  title:
    "Repetition: Mother of Mastery — 5-Book Self-Improvement Series by Ketan Shukla",
  description:
    "A five-book non-fiction journey from the science of repetition to the mastery of life. Neuroscience, deliberate practice, habit formation, cognitive techniques, and life integration. Available on Amazon Kindle, Paperback & Hardcover.",
  keywords: [
    "repetition",
    "mastery",
    "deliberate practice",
    "habit formation",
    "neuroplasticity",
    "self-improvement",
    "book series",
    "Ketan Shukla",
    "non-fiction",
    "Amazon KDP",
    "mastery books",
    "skill development",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Repetition: Mother of Mastery — 5-Book Self-Improvement Series",
    description:
      "A five-book non-fiction journey from the science of repetition to the mastery of life. Neuroscience, deliberate practice, habit formation, and cognitive mastery. By Ketan Shukla.",
    url: "https://repetition.ketanshukla.com",
    siteName: "Repetition: Mother of Mastery",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Repetition: Mother of Mastery — 5-Book Self-Improvement Series by Ketan Shukla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Repetition: Mother of Mastery — 5-Book Self-Improvement Series",
    description:
      "A five-book non-fiction journey from the science of repetition to the mastery of life. Neuroscience, deliberate practice, and cognitive mastery. By Ketan Shukla.",
    images: ["/images/og-image.png"],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BookSeries",
                  name: "Repetition: Mother of Mastery",
                  url: "https://repetition.ketanshukla.com",
                  description:
                    "A five-book non-fiction journey from the science of repetition to the mastery of life. Neuroscience, deliberate practice, habit formation, cognitive techniques, and life integration.",
                  numberOfBooks: 5,
                  genre: ["Self-Improvement", "Non-Fiction", "Psychology"],
                  author: {
                    "@type": "Person",
                    name: "Ketan Shukla",
                    url: "https://www.ketanshukla.com",
                    sameAs: ["https://metronagon.com"],
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Repetition: Mother of Mastery",
                  url: "https://repetition.ketanshukla.com",
                },
              ],
            }),
          }}
        />
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
