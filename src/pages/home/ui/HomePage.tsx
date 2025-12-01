"use client";

import { useLanguage } from "@/entities/language/model/LanguageContext";
import { homeRu, homeKg } from "@/entities/language/model/locales";
import type { CityBoard } from "@/shared/api/cityBoards";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { RegionsSection } from "./sections/RegionsSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { ContactsSection } from "./sections/ContactsSection";

type HomePageProps = {
  initialCities: CityBoard[];
};

export function HomePage({ initialCities }: HomePageProps) {
  const { language } = useLanguage();
  const t = language === "ru" ? homeRu : homeKg;

  return (
    <main className="bg-background text-foreground">
      <HeroSection t={t} />
      <AboutSection t={t} />
      <RegionsSection t={t} cities={initialCities} />
      <FeaturesSection t={t} />
      <ContactsSection t={t} />
    </main>
  );
}
