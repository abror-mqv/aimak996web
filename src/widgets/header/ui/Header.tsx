"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/entities/language/model/LanguageContext";

const labels = {
  ru: {
    contacts: "Контакты",
    privacy: "Политика конфиденциальности",
  },
  kg: {
    contacts: "Байланыштар",
    privacy: "Купуялуулук саясаты",
  },
};

export function Header() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const current = (() => {
    if (pathname === "/contacts") return "contacts" as const;
    if (pathname === "/privacy") return "privacy" as const;
    return "home" as const;
  })();

  const t = labels[language];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-3 sm:px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/aimak_logo.png"
            alt="Aimak 996"
            width={72}
            height={72}
            className="h-16 w-16 object-contain"
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="flex items-center gap-3 text-[11px] text-slate-600">
            
            <div className="flex items-center gap-3">
              <Link
                href="/contacts"
                className="transition hover:text-primary"
              >
                {t.contacts}
              </Link>
              <Link
                href="/privacy/1"
                className="transition hover:text-primary"
              >
                {t.privacy}
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-xs">
            {(["ru", "kg"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                className={
                  "min-w-[38px] rounded-full px-2 py-1 transition text-[11px] " +
                  (language === code
                    ? "bg-primary text-white shadow-sm shadow-primary/40"
                    : "text-slate-600 hover:bg-white")
                }
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
