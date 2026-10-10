import Button from "./Button";
import { INSTAGRAM_URL } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-black py-[120px] text-center">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mx-auto max-w-4xl text-5xl leading-[1.05] md:text-7xl">Pronto para sua nova experiência?</h2>
        <div className="mt-12">
          <Button className="w-full sm:w-auto sm:px-12">Chamar no WhatsApp</Button>
        </div>
        <div className="mt-16 flex flex-col items-center gap-3 border-t border-hair pt-8 text-sm text-muted">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center px-4 transition-colors hover:text-white"
          >
            Instagram · @theoldschoobarber
          </a>
          <address className="not-italic">R. Cel. Nogueira Padilha, 996 · Vila Hortência · Sorocaba - SP · 18020-000</address>
          <span>© {new Date().getFullYear()} The Old School Barber Shop</span>
        </div>
      </div>
    </footer>
  );
}
