import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ptchemenergysemesta.co.id"),
  title: "PT Chem Energy Semesta | Solusi Lingkungan dan Migas",
  description:
    "PT Chem Energy Semesta menyediakan konsultasi PROPER, HAZOP Study Indonesia, dan distributor gas detector untuk sektor industri.",
  keywords: [
    "Konsultasi PROPER",
    "HAZOP Study Indonesia",
    "Distributor Gas Detector",
    "PT Chem Energy Semesta"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "PT Chem Energy Semesta",
    title: "PT Chem Energy Semesta | Solusi Lingkungan dan Migas",
    description:
      "Layanan Konsultasi PROPER, HAZOP Study Indonesia, dan distributor gas detector untuk kebutuhan industri.",
    locale: "id_ID",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PT Chem Energy Semesta"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Chem Energy Semesta",
    description:
      "Solusi inovatif dan berkelanjutan untuk lingkungan, migas, dan industri.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
