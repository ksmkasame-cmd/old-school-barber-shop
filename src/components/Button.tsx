import { motion } from "framer-motion";
import { WHATSAPP_URL } from "../constants";

type Props = { children: React.ReactNode; className?: string };

export default function Button({ children, className = "" }: Props) {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-sm bg-white px-7 text-sm font-semibold uppercase tracking-wider text-black transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.28)] ${className}`}
    >
      {children}
    </motion.a>
  );
}
