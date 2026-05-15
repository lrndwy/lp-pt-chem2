import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PartnerSlider } from "@/components/sections/PartnerSlider";
import { RetailShowcase } from "@/components/sections/RetailShowcase";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TrainingShowcase } from "@/components/sections/TrainingShowcase";

export const metadata: Metadata = {
  title: "Chem Energy Semesta - Konsultasi PROPER, HAZOP Study, Distributor Gas Detector",
  description:
    "PT Chem Energy Semesta menghadirkan layanan Konsultasi PROPER, HAZOP Study Indonesia, dan distributor gas detector untuk sektor lingkungan, migas, dan industri.",
  keywords: [
    "Konsultasi PROPER",
    "HAZOP Study Indonesia",
    "Distributor Gas Detector"
  ]
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Chem Energy Semesta",
    slogan: "Our goal is to be a good company partner with the best service",
    description:
      "Solusi inovatif dan berkelanjutan di bidang lingkungan, migas, dan industri.",
    url: "https://ptchemenergysemesta.co.id",
    areaServed: "Indonesia",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konsultasi PROPER"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HAZOP Study Indonesia"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Distributor Gas Detector"
        }
      }
    ]
  };

  return (
    <div className="space-y-3 md:space-y-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      <div className="bg-white">
        <ServiceGrid />
      </div>

      <div className="bg-white">
        <PartnerSlider />
      </div>

      <div className="bg-white">
        <TrainingShowcase />
      </div>

      <div className="bg-white">
        <RetailShowcase />
      </div>
    </div>
  );
}

