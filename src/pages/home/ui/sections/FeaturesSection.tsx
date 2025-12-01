"use client";

import { motion } from "framer-motion";
import type { HomeLocale } from "@/entities/language/model/locales";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturesSection({ t }: { t: HomeLocale }) {
  return (
    <motion.section
      className="flex min-h-screen items-center justify-center px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <div className="w-full max-w-5xl grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            {t.featuresTitle}
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            {t.featuresText}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
