"use client";

import { motion } from "framer-motion";
import type { HomeLocale } from "@/entities/language/model/locales";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection({ t }: { t: HomeLocale }) {
  return (
    <motion.section
      className="flex min-h-[60vh] items-center justify-center px-4 md:min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
      transition={{ duration: 0.6 }}
    >
      <div className="flex max-w-3xl flex-col items-center text-center">
        <Image
          src="/assets/mountains.svg"
          alt="Aimak 996"
          width={96}
          height={36}
          className="mb-4 h-24 w-48 object-contain md:h-36 md:w-96"
        />
        <h1 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          {t.heroTitle}
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
          {t.heroSubtitle}
        </p>
      </div>
    </motion.section>
  );
}

// Фиктивный default export для совместимости с pages-валидатором Next.js.
const EmptyHeroSectionPage = () => null;
export default EmptyHeroSectionPage;
