import { ChampionWithId } from "@/types/champion";

export const fetchRotations = async (): Promise<ChampionWithId[]> => {
  const response = await fetch("/api/rotation");
  const data: ChampionWithId[] = await response.json();
  return data;
};
