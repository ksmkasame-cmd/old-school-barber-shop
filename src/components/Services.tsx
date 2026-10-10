import { motion, type Variants } from "framer-motion";
import Button from "./Button";
import { ease } from "../constants";

const services = [
  { n: "01", title: "Corte Clássico" },
  { n: "02", title: "Barba" },
  { n: "03", title: "Tratamentos" },
];

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Services() {
  return (
    <section id="servicos" className="border-b border-hair py-[120px]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl">Nossos Serviços</h2>
          <p className="mt-4 text-muted">Excelência e técnica em cada detalhe.</p>
        </div>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {services.map((s) => (
            <motion.li
              key={s.n}
              variants={item}
              className="group flex min-h-[220px] flex-col justify-between border border-white/10 bg-surface p-8 transition-colors duration-300 hover:border-white/40"
            >
              <span className="text-xs tracking-[0.3em] text-muted">{s.n}</span>
              <h3 className="text-2xl md:text-3xl">{s.title}</h3>
            </motion.li>
          ))}
        </motion.ul>
        <div className="mt-12 flex justify-center">
          <Button className="w-full sm:w-auto">Agendar no WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}
