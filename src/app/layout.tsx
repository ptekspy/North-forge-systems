import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const leagueSpartan = League_Spartan({ variable: "--font-league-spartan", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NorthForge Systems | Software and Automation for Manufacturing SMEs",
    template: "%s | NorthForge Systems",
  },
  description: siteConfig.description,
  openGraph: {
    title: "NorthForge Systems",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "NorthForge Systems",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logos/northforge-systems-logo-icon.png",
    shortcut: "/logos/northforge-systems-logo-icon.png",
    apple: "/logos/northforge-systems-logo-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="North Forge" />
      </head>
      <body className={`${inter.variable} ${leagueSpartan.variable} font-body antialiased`}>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="1e54cbb2-4015-4544-816a-196632e438df"
          strategy="beforeInteractive"
        />
        <Script
          id="google-tag-manager"
          src="https://www.googletagmanager.com/gtag/js?id=G-X9H43Q8VC0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-X9H43Q8VC0');`}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
