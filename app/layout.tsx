import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <head>
        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content={process.env.GOOGLE_SITE_VERIFICATION}
        />

        {/* ✅ Google Analytics */}
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

        {/* ✅ Schema (Structured Data) */}
        {/* <Script
          id="schema-home"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
