"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { businessDivisions } from "@/constants/business-divisions";

export function ServiceGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="business-divisions"
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-6xl px-5 py-14 md:py-16"
    >
      <div className="mb-8 grid items-end gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chem-green sm:text-sm">
            Business Divisions
          </p>
          <h2 className="mt-3 max-w-3xl text-[1.9rem] font-semibold text-chem-slate sm:text-4xl">
            Empat divisi bisnis utama dengan ruang lingkup yang jelas dan terfokus
          </h2>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-chem-slate/72">
            Ringkasan ini menampilkan struktur layanan secara singkat. Detail lengkap tersedia di
            halaman masing-masing divisi agar navigasi lebih cepat dan fokus.
          </p>
        </div>

        <div className="lg:col-span-4 lg:justify-self-end">
          <div className="inline-flex items-center rounded-full border border-chem-blue/18 bg-chem-blue/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-chem-blue">
            Detail ada di tiap halaman
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {businessDivisions.map((division) => (
          <motion.article
            key={division.key}
            whileHover={reducedMotion ? undefined : { y: -3 }}
            whileTap={reducedMotion ? undefined : { scale: 0.995 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-3xl border border-chem-blue/10 bg-white/95 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-chem-green">
                {division.eyebrow}
              </p>
              <span className="rounded-full border border-chem-blue/15 bg-chem-blue/5 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-chem-blue">
                {division.partner}
              </span>
            </div>

            <h3 className="mt-3 text-[1.18rem] font-semibold text-chem-slate">{division.label}</h3>
            <p className="mt-3 text-[0.95rem] leading-7 text-chem-slate/75">{division.summary}</p>

            <ul className="mt-5 space-y-2">
              {division.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-chem-slate/80">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-chem-blue" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href={division.href}
                className="inline-flex items-center rounded-full bg-chem-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Lihat detail
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
