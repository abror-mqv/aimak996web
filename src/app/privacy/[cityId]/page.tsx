import { notFound } from "next/navigation";
import { cityBoardsApi } from "@/shared/api/cityBoards";
import { PrivacyPage } from "@/pages/privacy/ui/PrivacyPage";

interface PrivacyRouteProps {
  params: Promise<{
    cityId: string;
  }>;
}

export default async function PrivacyRoute({ params }: PrivacyRouteProps) {
  const { cityId } = await params;
  const id = Number(cityId);
  if (!Number.isFinite(id) || id <= 0) {
    notFound();
  }

  try {
    const city = await cityBoardsApi.getById(id);

    if (!city) {
      notFound();
    }

    const appTitle = `${city.city_name} 996`;
    const cityName = city.city_name;

    return <PrivacyPage appTitle={appTitle} cityName={cityName} />;
  } catch (error) {
    // Если город не найден или бэк недоступен, показываем дефолтную версию для Аймак 996
    return <PrivacyPage appTitle="Аймак 996" cityName="Ноокат" />;
  }
}
