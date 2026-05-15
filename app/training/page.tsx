import { TrainingShowcase } from "@/components/sections/TrainingShowcase";
import Link from "next/link";

export default function TrainingPage() {
  return (
    <div className="pb-20 pt-10">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-14 pt-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chem-blue">Training</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-chem-slate sm:text-5xl">
            Program pelatihan dan sertifikasi untuk peningkatan kompetensi profesional
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-chem-slate/75">
            Fokus pelatihan mencakup keselamatan kerja, keselamatan proses, keamanan industri, dan
            pengelolaan lingkungan untuk mendukung kesiapan audit dan kepatuhan operasi.
          </p>
        </div>
      </section>

      <TrainingShowcase />
    </div>
  );
}
