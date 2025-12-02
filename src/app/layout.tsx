import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/entities/language/model/LanguageContext";
import { Header } from "@/widgets/header/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Аймак 996 — локальная доска объявлений по районам Кыргызстана",
  description:
    "Аймак 996 — мобильное приложение и онлайн-доска объявлений для жителей районов Кыргызстана: локальные объявления, сервисы и услуги в одном месте.",
  icons: {
    icon: "/assets/aimak_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <Header />
          <div className="pt-16 min-h-screen">
            {children}
            <footer className="mt-8 border-t border-slate-200 bg-white/80 py-3 text-center text-[11px] text-slate-500">
              2025 Аймак 996. Локальная доска объявлений для районов Кыргызстана.
              © 2025 Аймак 996. Локальная доска объявлений для районов Кыргызстана.
            </footer>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
