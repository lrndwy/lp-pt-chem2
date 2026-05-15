export function Footer() {
  return (
    <footer className="border-t border-chem-blue/10 bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-8 text-sm text-chem-slate/70">
        <p>© {new Date().getFullYear()} PT Chem Energy Semesta</p>
        <p>Our goal is to be a good company partner with the best service</p>
      </div>
    </footer>
  );
}
