import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cafefruits.shop"),
  title: "Cafe & Fruits | Premium Coffee & Fresh Juices in Paris",
  description:
    "Experience the perfect blend of traditional French coffee culture and modern juice innovations in Paris.",
  keywords:
    "cafe paris, fresh juices, coffee shop paris, french pastries, artisanal coffee, organic juice bar, healthy drinks paris, cafe fruits paris",
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
    canonical: "https://www.cafefruits.shop",
    languages: {
      en: "https://www.cafefruits.shop",
      fr: "https://www.cafefruits.shop/fr",
    },
  },
  publisher: "Cafe & Fruits Paris",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cafefruits.shop",
    title: "Cafe & Fruits | Premium Coffee & Fresh Juices in Paris",
    description:
      "Experience the perfect blend of traditional French coffee culture and modern juice innovations in Paris. Artisanal coffee, fresh-squeezed juices, and authentic French pastries.",
    images: [
      {
        url: "https://www.cafefruits.shop/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cafe & Fruits Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cafefruits",
    creator: "@cafefruits",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content={process.env.GOOGLE_SITE_VERIFICATION}
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Cafe & Fruits",
            image: "https://www.cafefruits.shop/cafe-hero.jpg",
            "@id": "https://www.cafefruits.shop",
            url: "https://www.cafefruits.shop",
            telephone: "+330758595116",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Rue Saint-Honoré",
              addressLocality: "Paris",
              postalCode: "75001",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 48.8657149,
              longitude: 2.3279806,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:30",
              closes: "20:30",
            },
            servesCuisine: ["Coffee", "Fresh Juices", "French Pastries"],
            priceRange: "€€",
            paymentAccepted: "Cash, Credit Card",
            currenciesAccepted: "EUR",
          })}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
