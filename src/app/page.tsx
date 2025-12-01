import { HomePage } from "@/pages/home/ui/HomePage";
import { cityBoardsApi, type CityBoard } from "@/shared/api/cityBoards";

export default async function Home() {
  let initialCities: CityBoard[] = [];

  try {
    initialCities = await cityBoardsApi.getAll();
  } catch (error) {
    // На первом этапе молча фоллбэчим на пустой список,
    // позже можно добавить логирование/пользовательское сообщение.
    initialCities = [];
  }

  return <HomePage initialCities={initialCities} />;
}
