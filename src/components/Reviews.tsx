import { motion } from "framer-motion";
import { ease } from "../constants";
import { reviews, GOOGLE_RATING } from "../reviews";

function Card({ name, text }: { name: string; text: string }) {
  return (
    <li className="flex w-[300px] shrink-0 flex-col justify-between border border-white/10 bg-surface p-7 sm:w-[380px]">
      <p className="font-display text-lg leading-snug md:text-xl">“{text}”</p>
      <div className="mt-8 border-t border-hair pt-4">
        <h4 className="text-sm font-semibold">{name}</h4>
        <span className="text-xs text-muted">Avaliação no Google</span>
      </div>
    </li>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="border-b border-hair py-[120px]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 md:flex-row md:items-end md:px-8">
        <div>
          <h2 className="text-4xl md:text-5xl">A Palavra de Quem Confia</h2>
          <p className="mt-4 max-w-xl text-muted">
            Avaliações reais de clientes da The Old School Barber Shop no Google.
          </p>
        </div>
        <p className="text-sm text-muted">
          <span className="font-display text-3xl text-white">{GOOGLE_RATING}</span> / 5 no Google
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Avaliações de clientes"
        className="marquee mt-12 overflow-hidden"
      >
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-stretch gap-4 pr-4">
              {reviews.map((r) => (
                <Card key={r.name} {...r} />
              ))}
            </ul>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
