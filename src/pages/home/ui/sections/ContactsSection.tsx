"use client";

import { motion } from "framer-motion";
import type { HomeLocale } from "@/entities/language/model/locales";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function ContactsSection({ t }: { t: HomeLocale }) {
  return (
    <motion.section
      className="flex min-h-screen items-center justify-center bg-slate-900 px-4 text-slate-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-[-40px] h-48 w-48 rounded-full bg-accent/35 blur-3xl" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t.contactsTitle}
            </h2>
            <p className="text-sm text-slate-200 md:text-base">{t.contactsIntro}</p>
          </div>
          <div className="space-y-3 text-sm md:text-base">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {t.contactsEmailLabel}
              </p>
              <a
                href={`mailto:${t.contactsEmail}`}
                className="mt-1 inline-flex items-center text-sm font-medium text-sky-300"
              >
                {t.contactsEmail}
              </a>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {t.contactsPhoneLabel}
              </p>
              <a
                href="https://wa.me/996702666631"
                className="mt-1 inline-flex items-center text-sm font-medium text-emerald-300"
              >
                {t.contactsPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Фиктивный default export для совместимости с pages-валидатором Next.js.
const EmptyContactsSectionPage = () => null;
export default EmptyContactsSectionPage;
