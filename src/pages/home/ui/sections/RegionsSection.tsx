"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HomeLocale } from "@/entities/language/model/locales";
import type { CityBoard } from "@/shared/api/cityBoards";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

type RegionsSectionProps = {
  t: HomeLocale;
  cities: CityBoard[];
};

export function RegionsSection({ t, cities }: RegionsSectionProps) {
  return (
    <motion.section
      className="flex min-h-screen items-center justify-center bg-slate-50 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <div className="w-full max-w-5xl space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {t.regionsTitle}
        </h2>
        <p className="text-sm text-slate-700 md:text-base">{t.regionsIntro}</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {cities.map((city) => (
            <motion.div
              key={city.id}
              className="flex min-h-[140px] flex-col items-start justify-between rounded-3xl border border-slate-200 bg-white/90 px-5 py-4 text-sm text-slate-800 shadow-md"
              whileHover={{ y: -3, boxShadow: "0 10px 24px rgba(15,23,42,0.14)" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {city.logo_url && (
                      <Image
                        src={city.logo_url}
                        alt={city.city_name}
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain rounded-[6px]"
                      />
                    
                  )}
                  <h3 className="font-semibold text-slate-900">{city.city_name} 996</h3>
                </div>
                <span
                  className={
                    "rounded-full px-2 py-0.5 text-[10px] " +
                    (city.is_active
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-slate-100 text-slate-500")
                  }
                >
                  {city.is_active ? "активен" : "скоро"}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                {city.playmarket_link && (
                  city.is_active ? (
                    <a
                      href={city.playmarket_link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-[#0F9D58] px-3 py-1 text-[11px] font-medium text-white shadow-sm shadow-[#0F9D58]/50 hover:bg-[#0c7c46]"
                    >
                      <span className="text-[13px]">▶</span>
                      <span>Play Market</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-400"
                    >
                      <span className="text-[13px]">▶</span>
                      <span>Play Market</span>
                    </button>
                  )
                )}
                {city.appstore_link && (
                  city.is_active ? (
                    <a
                      href={city.appstore_link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-[11px] font-medium text-white shadow-sm shadow-black/40 hover:bg-slate-900"
                    >
                      <span className="text-[13px]"></span>
                      <span>App Store</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-400"
                    >
                      <span className="text-[13px]"></span>
                      <span>App Store</span>
                    </button>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-slate-700 md:text-base">{t.regionsOutro}</p>
      </div>
    </motion.section>
  );
}

// Фиктивный default export для совместимости с pages-валидатором Next.js.
const EmptyRegionsSectionPage = () => null;
export default EmptyRegionsSectionPage;
