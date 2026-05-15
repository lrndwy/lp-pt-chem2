"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/constants/services";

export function ServiceGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="services-overview"
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-6xl px-5 py-14 md:py-16"
    >
      <div className="mb-8 grid items-end gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chem-green sm:text-sm">
            Our Services
          </p>
          <h2 className="mt-3 max-w-3xl text-[1.9rem] font-semibold text-chem-slate sm:text-4xl">
            Konsultasi strategis untuk lingkungan, K3, dan operasi industri berisiko tinggi
          </h2>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-chem-slate/72">
            Seluruh layanan dirancang untuk meningkatkan kepatuhan, keamanan proses, serta
            efisiensi operasional dengan pendekatan data dan standar nasional.
          </p>
        </div>

        <div className="lg:col-span-5 lg:justify-self-end">
          <div className="inline-flex items-center rounded-full border border-chem-blue/18 bg-chem-blue/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-chem-blue">
            Data-Driven Industrial Advisory
          </div>
        </div>
      </div>

      <div className="mb-8 grid gap-3 md:grid-cols-12">
        <div className="relative h-[280px] overflow-hidden md:col-span-7 md:h-[360px]">
          <Image
            src="/assets/services/service-1.jpg"
            alt="Kegiatan konsultasi layanan PT Chem Energy Semesta"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1625]/18 via-transparent to-transparent" />
        </div>

        <div className="relative h-[280px] overflow-hidden md:col-span-5 md:h-[360px]">
          <Image
            src="/assets/services/service-2.jpg"
            alt="Aktivitas tim layanan lapangan dan analisis risiko"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1625]/14 via-transparent to-transparent" />
        </div>
      </div>

      <div className="divide-y divide-chem-blue/12 border-y border-chem-blue/12">
        {services.map((service) => (
          <motion.article
            key={service.slug}
            whileHover={reducedMotion ? undefined : { x: 3 }}
            whileTap={reducedMotion ? undefined : { scale: 0.995 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid gap-4 py-6 sm:gap-5 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-chem-green">
                {service.highlight}
              </p>
              <h3 className="text-[1.34rem] font-semibold text-chem-slate">{service.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-7 text-chem-slate/75">{service.description}</p>
            </div>

            <div className="md:col-span-5">
              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-chem-slate/80">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-chem-blue" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 inline-flex text-xs font-medium uppercase tracking-[0.08em] text-chem-blue/80">
                {service.badge}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
