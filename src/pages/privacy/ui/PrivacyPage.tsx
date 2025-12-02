type PrivacyPageProps = {
  appTitle: string;
  cityName: string;
};

export function PrivacyPage({ appTitle, cityName }: PrivacyPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            Политика конфиденциальности
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Политика конфиденциальности приложения «{appTitle}»
          </h1>
          <p className="text-xs text-slate-500">Дата вступления в силу: 31.08.2025</p>
          <p className="text-sm text-slate-600 md:text-base">
            Настоящая Политика конфиденциальности описывает, как работает приложение «
            {appTitle}
            » и каким образом мы обрабатываем данные пользователей.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900 md:text-lg">
            1. Общие положения
          </h2>
          <p className="text-sm text-slate-700 md:text-base">
            Приложение «{appTitle}» является доской объявлений для жителей города {cityName} (Кыргызстан).
            Пользователи могут просматривать объявления. Для публикации объявления
            пользователь переходит через приложение в WhatsApp к модератору, который
            проверяет содержание объявления и публикует его при соответствии правилам
            модерации.
          </p>
          <p className="text-sm text-slate-700 md:text-base">
            Приложение доступно на платформах Android (Play Market) и iOS (App Store).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900 md:text-lg">
            2. Сбор и использование данных
          </h2>
          <p className="text-sm text-slate-700 md:text-base">
            Приложение «{appTitle}» не собирает персональные данные пользователей.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700 md:text-base">
            <li>Все запросы приложения являются GET-запросами к серверу.</li>
            <li>Никакая информация о пользователях не сохраняется на стороне сервера.</li>
            <li>Мы не используем авторизацию, куки, геолокацию или иные методы сбора данных.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900 md:text-lg">
            3. Передача данных третьим лицам
          </h2>
          <p className="text-sm text-slate-700 md:text-base">
            Поскольку приложение не собирает данные о пользователях, никакая информация
            о них не передаётся третьим лицам.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900 md:text-lg">
            4. Хранение данных
          </h2>
          <p className="text-sm text-slate-700 md:text-base">
            Объявления, публикуемые через приложение, хранятся на сервере и проходят
            ручную модерацию. Данных о пользователях, отправляющих объявления, приложение
            не хранит.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900 md:text-lg">
            5. Права пользователей
          </h2>
          <p className="text-sm text-slate-700 md:text-base">
            Поскольку приложение не собирает персональные данные, пользователи не могут
            запросить их удаление, изменение или передачу. При этом пользователи могут в
            любой момент прекратить использование приложения, удалив его со своего
            устройства.
          </p>
        </section>
      </div>
    </main>
  );
}

// Фиктивный default export для совместимости с pages-валидатором Next.js.
const EmptyPrivacyPage = () => null;
export default EmptyPrivacyPage;
