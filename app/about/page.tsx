import { partners } from "@/constants/partners";

export const metadata = {
  title: "Tentang PT Chem Energy Semesta | Solusi Lingkungan & K3",
  description: "PT Chem Energy Semesta adalah perusahaan solusi inovatif di bidang lingkungan, migas, dan K3 dengan pengalaman dan tim ahli berpengalaman.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-[#f5f5f5] to-white">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
        <h1 className="text-[2.05rem] sm:text-5xl lg:text-[3.55rem] font-bold text-chem-slate leading-[1.14] text-balance">
          Tentang PT Chem Energy Semesta
        </h1>
        <p className="mt-6 text-[0.95rem] sm:text-lg max-w-3xl text-chem-slate/80 leading-[1.65]">
          PT Chem Energy Semesta adalah perusahaan yang berkomitmen untuk memberikan solusi inovatif dan berkelanjutan di bidang lingkungan, minyak dan gas bumi, serta industri lainnya.
        </p>
      </section>

      {/* Company Profile Section */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-chem-slate mb-4">Misi Kami</h2>
            <p className="text-[0.95rem] text-chem-slate/75 leading-[1.65]">
              Dengan pengalaman dan tim ahli yang berpengalaman, kami berusaha membantu klien dalam menghadapi tantangan kompleks di sektor lingkungan, migas, dan industri yang terus berkembang.
            </p>
            <p className="mt-4 text-lg font-semibold text-chem-green italic">
              "OUR GOAL IS TO BE A GOOD COMPANY PARTNER WITH THE BEST SERVICE."
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-chem-slate mb-4">Nilai-Nilai Inti</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-chem-green mb-1">Keberlanjutan</h3>
                <p className="text-[0.95rem] text-chem-slate/75">
                  Setiap solusi mempertimbangkan dampak jangka panjang terhadap lingkungan dan masyarakat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-chem-blue mb-1">Inovasi</h3>
                <p className="text-[0.95rem] text-chem-slate/75">
                  Terus menerus mencari pendekatan baru dan teknologi terkini untuk memenuhi kebutuhan klien.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-chem-yellow mb-1">Kolaborasi</h3>
                <p className="text-[0.95rem] text-chem-slate/75">
                  Bekerja sama dengan klien, pemangku kepentingan, dan komunitas untuk solusi komprehensif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-chem-slate mb-8">Kemitraan Strategis</h2>
        <p className="text-[0.95rem] text-chem-slate/75 leading-[1.65] mb-8 max-w-3xl">
          Kami bekerja sama dengan berbagai lembaga sertifikasi dan brand global untuk menjamin kualitas layanan berstandar internasional.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="p-5 border border-chem-slate/10 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
            >
              <h3 className="font-semibold text-chem-slate mb-2 text-[0.95rem] sm:text-base">
                {partner.name}
              </h3>
              <p className="text-[0.85rem] text-chem-slate/65 leading-[1.5]">
                {partner.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-chem-slate mb-8">Pengalaman Proyek Terkini</h2>
        
        <div className="space-y-5">
          <div className="pl-5 border-l-4 border-chem-green bg-white/50 p-4 rounded-r-lg">
            <h3 className="font-semibold text-chem-slate mb-2">Study HAZOPS dan HAZID untuk Project Pipeline</h3>
            <p className="text-[0.9rem] text-chem-slate/70">
              3,5km pipeline untuk Energy Equity Epic Sengkang, Pty. Ltd. - 2025
            </p>
          </div>

          <div className="pl-5 border-l-4 border-chem-blue bg-white/50 p-4 rounded-r-lg">
            <h3 className="font-semibold text-chem-slate mb-2">Re-HAZOPS & RE-HAZID Study Report</h3>
            <p className="text-[0.9rem] text-chem-slate/70">
              Patila Metering System (PMS) TRAIN 1&2 di Kampung Baru Gas Plant - 2025
            </p>
          </div>

          <div className="pl-5 border-l-4 border-chem-yellow bg-white/50 p-4 rounded-r-lg">
            <h3 className="font-semibold text-chem-slate mb-2">HAZOP Facilitator</h3>
            <p className="text-[0.9rem] text-chem-slate/70">
              Softquad Storage Tank dan Premixer Arquad Tank - PT Unilever - 2025
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="bg-gradient-to-r from-chem-green/10 to-chem-blue/10 rounded-lg p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-chem-slate mb-4">
            Mari Berkolaborasi dengan Kami
          </h2>
          <p className="text-[0.95rem] text-chem-slate/75 max-w-2xl mx-auto leading-[1.65] mb-6">
            Dengan komitmen terhadap keunggulan dan inovasi berkelanjutan, kami siap menjadi mitra terbaik Anda dalam menghadapi tantangan lingkungan dan K3.
          </p>
          <a 
            href="mailto:info@ptchem.com" 
            className="inline-block px-8 py-3 bg-chem-green text-white font-medium rounded-lg hover:bg-chem-green/90 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  );
}
