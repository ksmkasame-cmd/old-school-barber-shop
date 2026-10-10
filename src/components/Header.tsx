import { WHATSAPP_URL } from "../constants";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hair bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="font-display text-base font-semibold tracking-wide md:text-lg">
          The Old School <span className="text-muted">Barber Shop</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center border border-white/20 px-4 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-white hover:bg-white hover:text-black"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
