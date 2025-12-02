"use client";

import { motion } from "framer-motion";

export function ContactsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          className="mx-auto flex w-full max-w-3xl flex-col gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
              Связаться с командой
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Контакты Аймак 996
            </h1>
            <p className="max-w-xl text-sm text-slate-600 md:text-base">
              Если есть вопросы по проекту, предложения по партнёрству или обратная связь
              по приложению — пиши нам удобным способом.
            </p>
            <p className="text-[11px] text-slate-400">
              Мы работаем в часовом поясе UTC+6 (Кыргызстан).
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-semibold text-white">
                  TEL
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Телефон / WhatsApp
                </p>
              </div>
              <a
                href="https://wa.me/996702666631"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm font-medium text-slate-900 hover:text-primary"
              >
                +996 702 666 631
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-white">
                  @
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Email
                </p>
              </div>
              <a
                href="mailto:aimak996.dev@gmail.com"
                className="mt-2 block text-sm font-medium text-slate-900 hover:text-primary"
              >
                aimak996.dev@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-[11px] font-semibold text-white">
                  TG
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Telegram
                </p>
              </div>
              <a
                href="https://t.me/aimak_996"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm font-medium text-slate-900 hover:text-primary"
              >
                @aimak_996
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default ContactsPage;
