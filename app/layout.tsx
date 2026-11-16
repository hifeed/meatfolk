import type { Metadata } from "next";
import { Hanken_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://www.meatfolk.com";
const SITE_TITLE = "Meatfolk - Crafted by Farmers, Enjoyed by Food Lovers";
const OG_IMAGE = "/hero-products.png";

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
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    url: SITE_URL,
    siteName: "Meatfolk",
    images: [
      {
        url: OG_IMAGE,
        alt: "Premium packaged meat products for retail and HORECA",
      },
    ],
    description:
      "Daging berkualitas dari peternak lokal Indonesia. Halal MUI & NKV Certified.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Daging berkualitas dari peternak lokal Indonesia. Halal MUI & NKV Certified.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meatfolk",
  url: SITE_URL,
  logo: `${SITE_URL}/14.png`,
  sameAs: ["https://instagram.com/meatfolk.id"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-body-md antialiased">{children}</body>
    </html>
  );
}
