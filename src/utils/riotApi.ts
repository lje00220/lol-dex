import { ChampionWithId } from "@/types/champion";

export const fetchRotations = async (): Promise<ChampionWithId[]> => {
  const response = await fetch("http://localhost:3000/api/rotation");
  const data: ChampionWithId[] = await response.json();
  return data;
};
