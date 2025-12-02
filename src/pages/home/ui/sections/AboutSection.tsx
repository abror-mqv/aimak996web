"use client";

import { motion } from "framer-motion";
import type { HomeLocale } from "@/entities/language/model/locales";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection({ t }: { t: HomeLocale }) {
  return (
    <motion.section
      className="flex min-h-[80vh] items-center justify-center px-4 md:min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <div className="w-full max-w-3xl space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {t.aboutTitle}
        </h2>
        <p className="text-sm leading-relaxed text-slate-700 md:text-base">
          {t.aboutText}
        </p>
      </div>
    </motion.section>
  );
}

// Фиктивный default export для совместимости с pages-валидатором Next.js.
const EmptyAboutSectionPage = () => null;
export default EmptyAboutSectionPage;
