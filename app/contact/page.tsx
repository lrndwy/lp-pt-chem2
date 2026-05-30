export const metadata = {
  title: "Contact Us | PT Chem Energy Semesta",
  description: "Hubungi PT Chem Energy Semesta untuk kebutuhan konsultasi process safety, environmental, retail gas detector, dan training."
};

export default function ContactPage() {
  return (
    <div className="bg-white pb-20 pt-10">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chem-green">Contact Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-chem-slate sm:text-5xl">
            Hubungi kami untuk kebutuhan project, partnership, dan permintaan penawaran
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-chem-slate/75">
            Tim PT Chem Energy Semesta siap membantu kebutuhan konsultasi process safety, environmental,
            equipment and retail, serta training. Kirimkan kebutuhan Anda agar kami bisa menindaklanjuti lewat email resmi.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:info@ptchem.com"
              className="rounded-full bg-chem-blue px-7 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              info@ptchem.com
            </a>
            <a
              href="/services"
              className="rounded-full border border-chem-blue/20 bg-white px-7 py-3 text-sm font-semibold text-chem-blue transition-colors hover:border-chem-green hover:text-chem-green"
            >
              Lihat Service
            </a>
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-5">
          <div className="rounded-3xl border border-chem-blue/10 bg-[#fbfdff] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-chem-blue">Email</p>
            <p className="mt-2 text-lg font-semibold text-chem-slate">info@ptchem.com</p>
            <p className="mt-2 text-sm leading-7 text-chem-slate/72">
              Gunakan email ini untuk request meeting, technical discussion, atau inquiry kemitraan.
            </p>
          </div>

          <div className="rounded-3xl border border-chem-green/15 bg-gradient-to-br from-[#f2fbf4] to-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-chem-green">Response Scope</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-chem-slate/78">
              <li>Process Safety and Engineering</li>
              <li>Environmental Consulting</li>
              <li>Equipment and Retail</li>
              <li>Training and Certification</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
