"use client";

import Image from "next/image";
import { PartnerSlider } from "@/components/sections/PartnerSlider";
import { services } from "@/constants/services";
import { categoryHeroImages } from "@/constants/category-hero-images";
import { useState } from "react";
import { trainingList } from "@/constants/training-list";

export default function ServicesPage() {
  const categories = [
    { key: "Training", label: "Training", img: "/assets/services/training2.png" },
    { key: "Environment", label: "Environment", img: "/assets/services/environtment2.png" },
    { key: "Safety", label: "Safety Solution & Risk Management", img: "/assets/services/safety-solution2.png" }
  ];

  const [activeCategory, setActiveCategory] = useState<string>(categories[1].key);

  function CategoryTabs() {
    return (
      <div className="grid w-full gap-3 sm:grid-cols-3">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`group overflow-hidden text-left transition-all duration-300 ${
              activeCategory === cat.key
                ? "bg-chem-blue/8"
                : "bg-white/50"
            }`}
          >
            <div className="relative h-20 overflow-hidden sm:h-40">
              <Image
                src={cat.img}
                alt={cat.label}
                fill
                className="object-contain scale-110 transition-transform duration-500 group-hover:scale-115"
                sizes="(min-width: 640px) 18vw, 92vw"
              />
            </div>
            <div className="flex items-center justify-center gap-3 px-3 py-2.5 sm:px-4">

              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[0.65rem] font-semibold transition-colors ${
                  activeCategory === cat.key ? "bg-chem-blue text-white" : "bg-chem-blue/10 text-chem-blue"
                }`}
              >
                {String(categories.findIndex((item) => item.key === cat.key) + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.82rem] font-semibold leading-5 text-chem-slate sm:text-sm">{cat.label}</span>
            </div>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white pb-14 pt-6 sm:pt-8">
      <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 pb-8 pt-6 lg:grid-cols-12 lg:gap-6 lg:pb-10">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chem-green">Our Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-chem-slate sm:text-5xl">
            Solusi end-to-end untuk kepatuhan lingkungan, keselamatan proses, dan mitigasi risiko
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-chem-slate/75">
            Tim PT Chem Energy Semesta menggabungkan metodologi teknis, pengalaman lapangan,
            dan standar regulasi untuk membantu perusahaan menjaga operasi tetap aman,
            efisien, dan berkelanjutan.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#service-list"
              className="rounded-full bg-chem-blue px-7 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5"
            >
              Lihat Detail Layanan
            </a>
            <a
              href="/about"
              className="rounded-full border border-chem-blue/20 bg-white/85 px-7 py-3 text-sm font-semibold text-chem-blue transition-colors hover:border-chem-green hover:text-chem-green"
            >
              Pelajari Perusahaan
            </a>
          </div>
        </div>

        <div className="grid h-[420px] gap-3 lg:col-span-5 lg:h-[460px] lg:grid-cols-12">
          <div className="relative overflow-hidden lg:col-span-7">
            <Image
              src="/assets/services/service-1.jpg"
              alt="Kegiatan layanan konsultasi dan pelatihan industri"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 22vw, 90vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1625]/16 via-transparent to-transparent" />
          </div>

          <div className="relative overflow-hidden lg:col-span-5">
            <Image
              src="/assets/services/service-2.jpg"
              alt="Tim inspeksi teknis untuk analisis risiko dan kepatuhan"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1625]/12 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="h-px w-full bg-chem-blue/12" />
      </div>

      <section id="service-list" className="mx-auto w-full max-w-6xl px-5 pb-4 pt-7 sm:pt-8">


        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-3xl text-3xl font-semibold text-chem-slate sm:text-[2.1rem]">
            Cakupan layanan yang terstruktur, fokus hasil, dan mudah diimplementasikan
          </h2>
          <p className="max-w-md text-sm leading-7 text-chem-slate/70 sm:text-[0.95rem]">
            Setiap layanan didesain modular agar bisa langsung disesuaikan dengan kebutuhan site,
            tingkat risiko operasi, dan target kepatuhan perusahaan.
          </p>
        </div>

        {/* Tabs for categories */}
        <div className="mb-6">
          <CategoryTabs />
        </div>

        <div className="divide-y divide-chem-blue/12 border-y border-chem-blue/12">
          {/* Hero image for active category */}
          <div className="mb-6 grid gap-3 md:grid-cols-12">
            <div className="relative h-[260px] overflow-hidden md:col-span-7 md:h-[320px]">
              <Image src={categoryHeroImages[activeCategory].left} alt={activeCategory} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1625]/18 via-transparent to-transparent" />
            </div>

            <div className="relative h-[260px] overflow-hidden md:col-span-5 md:h-[320px]">
              <Image src={categoryHeroImages[activeCategory].right} alt="detail" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1625]/14 via-transparent to-transparent" />
            </div>
          </div>

          {/* List: if Training show a simple list card, otherwise show services filtered by category */}
          {activeCategory === "Training" ? (
            <div className="py-6">
              <article className="flex-col gap-4">
                <div className="py-2">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-chem-green">
                    Training
                  </p>
                  <h3 className="mt-2 text-[1.26rem] font-semibold text-chem-slate">
                    Program pelatihan dan sertifikasi untuk peningkatan kompetensi profesional
                  </h3>
                  <p className="mt-2 text-[0.96rem] leading-7 text-chem-slate/75">
                    Kurikulum pelatihan mencakup keselamatan kerja, keselamatan proses, keamanan industri,
                    dan pengelolaan lingkungan untuk mendukung kesiapan audit dan kepatuhan operasional.
                  </p>
                </div>

                <div className="py-2">
                  <div className="space-y-3">
                    {trainingList.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-chem-blue/10 bg-[#fbfdff] px-4 py-3 shadow-[0_8px_24px_rgba(11,22,37,0.04)]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-chem-blue/10 text-xs font-semibold text-chem-blue">
                            {'>'}
                          </span>
                          <span className="text-sm leading-6 text-chem-slate/85">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-chem-blue/80">
                    Training Overview
                  </p> */}
                </div>
              </article>
            </div>
          ) : (
            services
              .filter((s) => s.category === activeCategory)
              .map((service) => (
                <article key={service.slug} className="grid gap-4 py-6 md:grid-cols-12">
                  <div className="md:col-span-7">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-chem-green">
                      {service.highlight}
                    </p>
                    <h3 className="mt-2 text-[1.26rem] font-semibold text-chem-slate">{service.title}</h3>
                    <p className="mt-2 text-[0.96rem] leading-7 text-chem-slate/75">{service.description}</p>
                  </div>

                  <div className="md:col-span-5">
                    <ul className="space-y-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-chem-slate/80">
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-chem-blue" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-chem-blue/80">
                      {service.badge}
                    </p>
                  </div>
                </article>
              ))
          )}
        </div>
      </section>

      <div className="mt-4 bg-white">
        <PartnerSlider />
      </div>
    </div>
  );
}
