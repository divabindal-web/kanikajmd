import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { identity } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://kanikaguptashori.com"),
  title: {
    default: `${identity.name} | Co-Founder and COO, Square Yards`,
    template: `%s | ${identity.name}`,
  },
  description: identity.metaDescription,
  openGraph: {
    title: `${identity.name} | Co-Founder and COO, Square Yards`,
    description: identity.metaDescription,
    type: "website",
    locale: "en_IN",
    siteName: identity.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: identity.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.name} | Co-Founder and COO, Square Yards`,
    description: identity.metaDescription,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
