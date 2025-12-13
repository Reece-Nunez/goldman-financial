import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import RecaptchaProvider from "./components/RecaptchaProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://goldmanandco.com"),
  title: {
    default: "Goldman and Co | Private Capital & Strategic Growth",
    template: "%s | Goldman and Co",
  },
  description:
    "Goldman and Co is a private capital and investment firm focused on acquiring, funding, and scaling high-performing middle-market businesses. We deploy capital strategically and create long-term value.",
  keywords: [
    "private capital",
    "investment firm",
    "growth capital",
    "private equity",
    "business funding",
    "middle market",
    "strategic investment",
    "capital partner",
    "structured finance",
    "business expansion",
  ],
  authors: [{ name: "Goldman and Co" }],
  creator: "Goldman and Co",
  publisher: "Goldman and Co",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goldmanandco.com",
    siteName: "Goldman and Co",
    title: "Goldman and Co | Private Capital & Strategic Growth",
    description:
      "Private capital and investment firm focused on acquiring, funding, and scaling high-performing middle-market businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Goldman and Co - Private Capital & Strategic Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldman and Co | Private Capital & Strategic Growth",
    description:
      "Private capital and investment firm focused on acquiring, funding, and scaling high-performing middle-market businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://goldmanandco.com",
  },
  category: "finance",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Goldman and Co",
  description:
    "Private capital and investment firm focused on acquiring, funding, and scaling high-performing middle-market businesses.",
  url: "https://goldmanandco.com",
  logo: "https://goldmanandco.com/Final Files-01.png",
  image: "https://goldmanandco.com/og-image.jpg",
  telephone: "+1-888-959-0332",
  email: "info@goldmanandco.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "12636 High Bluff Drive, Suite 400",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92130",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "333 3rd Avenue N., Suite 400",
      addressLocality: "St. Petersburg",
      addressRegion: "FL",
      postalCode: "33701",
      addressCountry: "US",
    },
  ],
  areaServed: "United States",
  serviceType: [
    "Private Capital Investments",
    "Growth Capital",
    "Structured Finance",
    "Strategic Advisory",
  ],
  sameAs: [],
  priceRange: "$$$$",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Goldman and Co",
  url: "https://goldmanandco.com",
  logo: "https://goldmanandco.com/Final Files-01.png",
  description:
    "Private capital and investment firm providing growth capital, structured investments, and strategic guidance to established businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-888-959-0332",
    contactType: "customer service",
    email: "info@goldmanandco.com",
    availableLanguage: "English",
  },
  location: [
    {
      "@type": "Place",
      name: "Goldman and Co - San Diego Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12636 High Bluff Drive, Suite 400",
        addressLocality: "San Diego",
        addressRegion: "CA",
        postalCode: "92130",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      name: "Goldman and Co - St. Petersburg Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "333 3rd Avenue N., Suite 400",
        addressLocality: "St. Petersburg",
        addressRegion: "FL",
        postalCode: "33701",
        addressCountry: "US",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </body>
    </html>
  );
}
