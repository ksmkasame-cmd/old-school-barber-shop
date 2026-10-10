import { motion } from "framer-motion";
import { ease } from "../constants";

export default function Concept() {
  return (
    <section id="conceito" className="border-b border-hair py-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-20"
      >
        <h2 className="text-4xl leading-tight md:text-5xl">O Clássico Encontra o Atendimento Profissional.</h2>
        <p className="text-base leading-relaxed text-muted md:text-lg">
          Resgatamos o ambiente das tradicionais barber shops com uma temática única em Sorocaba. Nosso espaço é higienizado, agradável e preparado para o seu conforto. Profissionais especialistas, preço justo e, para quem curte, uma cerveja gelada durante a espera. Tudo para que você seja sempre muito bem atendido.
        </p>
      </motion.div>
    </section>
  );
}
