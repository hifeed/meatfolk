import type { Metadata } from "next";
import { Hanken_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meatfolk - Crafted by Farmers, Enjoyed by Food Lovers",
  description:
    "Daging berkualitas dari peternak lokal Indonesia. Halal MUI & NKV Certified. Solusi protein untuk distributor, retailer, dan HORECA.",
  keywords: [
    "meatfolk",
    "daging premium",
    "daging halal",
    "peternak lokal",
    "HORECA",
    "B2B daging",
  ],
  openGraph: {
    title: "Meatfolk - Crafted by Farmers, Enjoyed by Food Lovers",
    description:
      "Daging berkualitas dari peternak lokal Indonesia. Halal MUI & NKV Certified.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meatfolk - Crafted by Farmers, Enjoyed by Food Lovers",
    description:
      "Daging berkualitas dari peternak lokal Indonesia. Halal MUI & NKV Certified.",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${hankenGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CGGEZV2CFN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CGGEZV2CFN');
          `}
        </Script>
      </head>
      <body className="font-body-md antialiased">{children}</body>
    </html>
  );
}
