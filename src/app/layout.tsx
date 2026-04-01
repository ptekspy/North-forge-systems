import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
