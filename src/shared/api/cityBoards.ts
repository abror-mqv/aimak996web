import axios from "axios";

export const API_BASE_URL = "http://176.126.164.86:8000" as const;

export const CITY_BOARDS_PATH = "/categories/city-boards/" as const;

export const CITY_BOARDS_URL = `${API_BASE_URL}${CITY_BOARDS_PATH}` as const;

export type CityBoard = {
  id: number;
  city_name: string;
  logo_url: string;
  is_active: boolean;
  playmarket_link: string;
  appstore_link: string;
};

export const cityBoardsApi = {
  /** GET /categories/city-boards/ */
  getAll: async (): Promise<CityBoard[]> => {
    const res = await axios.get<CityBoard[]>(CITY_BOARDS_URL, {
      // SSR-friendly: no browser-only config here
      headers: {
        Accept: "application/json",
      },
    });
    return res.data;
  },
  /** Получить город по id на основе одного общего запроса getAll */
  getById: async (id: number): Promise<CityBoard | undefined> => {
    const all = await cityBoardsApi.getAll();
    return all.find((city) => city.id === id);
  },
  // Заготовки под CRUD, если позже понадобится
  createUrl: CITY_BOARDS_URL,
  detailUrl: (id: number) => `${CITY_BOARDS_URL}${id}/`,
};
