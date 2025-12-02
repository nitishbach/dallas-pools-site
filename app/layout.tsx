import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gulf Breeze Pool Service | Dallas Pool Cleaning & Maintenance",
  description:
    "Professional pool cleaning and maintenance services in Dallas, TX. Weekly service, deep cleans, and equipment repair. Licensed & insured.",
  keywords: [
    "pool cleaning Dallas",
    "pool maintenance Plano",
    "pool service Richardson",
    "pool cleaning Garland",
    "pool service Mesquite",
    "pool cleaning Addison",
    "pool service Carrollton",
    "pool cleaning Frisco",
    "pool service Flower Mound",
    "pool cleaning Argyle",
    "pool service Highland Village",
    "pool cleaning Southlake",
    "Dallas pool service",
    "pool cleaning DFW",
  ],
  authors: [{ name: "Gulf Breeze Pool Service" }],
  creator: "Gulf Breeze Pool Service",
  publisher: "Gulf Breeze Pool Service",
  metadataBase: new URL("https://www.gulfbreezepoolsdfw.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gulfbreezepoolsdfw.com",
    siteName: "Gulf Breeze Pool Service",
    title: "Gulf Breeze Pool Service | Dallas Pool Cleaning & Maintenance",
    description:
      "Professional pool cleaning and maintenance services in Dallas, TX. Weekly service, deep cleans, and equipment repair. Licensed & insured.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gulf Breeze Pool Service Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulf Breeze Pool Service | Dallas Pool Cleaning & Maintenance",
    description:
      "Professional pool cleaning and maintenance services in Dallas, TX. Weekly service, deep cleans, and equipment repair.",
    images: ["/logo.png"],
    creator: "@gulfbreeze.poolservice",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/logo.png",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
