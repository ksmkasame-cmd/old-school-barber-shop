import { motion, type Variants } from "framer-motion";
import Button from "./Button";
import { ease } from "../constants";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center border-b border-hair pt-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-12">
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-8">
          <motion.p variants={item} className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-muted">
            Barbearia clássica · Sorocaba
          </motion.p>
          <motion.h1
            variants={item}
            className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            A Tradição da Verdadeira Barbearia em Sorocaba.
          </motion.h1>
          <motion.p variants={item} className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Mais que um corte, uma experiência clássica. Conheça a The Old School Barber Shop e garanta um atendimento de excelência.
          </motion.p>
          <motion.div variants={item} className="mt-10">
            <Button className="w-full sm:w-auto">Agendar meu horário</Button>
          </motion.div>
        </motion.div>

        {/* Espaço reservado para foto real do ambiente */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          aria-hidden="true"
          className="relative hidden aspect-[3/4] border border-hair bg-surface lg:col-span-4 lg:block"
        >
          <div className="absolute inset-3 flex flex-col items-center justify-center border border-hair text-center">
            <span className="font-display text-6xl">T.O.S.</span>
            <span className="mt-3 text-[10px] uppercase tracking-[0.35em] text-muted">Barber Shop</span>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
