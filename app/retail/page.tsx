import { RetailShowcase } from "@/components/sections/RetailShowcase";

export default function RetailPage() {
  return (
    <div className="pb-20 pt-10">
      <section className="mx-auto w-full max-w-6xl px-5 pb-14 pt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chem-yellow">Retail</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-chem-slate sm:text-5xl">
          Produk gas detector industri dari brand global dengan dukungan maintenance
        </h1>
        <p className="mt-5 max-w-2xl text-base text-chem-slate/75">
          PT Chem Energy Semesta melayani kebutuhan pengadaan alat deteksi gas untuk monitoring
          area berisiko sekaligus dukungan layanan purna jual.
        </p>
      </section>
      <RetailShowcase />
    </div>
  );
}
