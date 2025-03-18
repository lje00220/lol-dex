import { ChampionWithId } from "@/types/champion";

// rotation 정보를 받아오는 fetch 함수
export const fetchRotations = async (): Promise<ChampionWithId[]> => {
  const response = await fetch("/api/rotation");
  const rotations: ChampionWithId[] = await response.json();
  return rotations;
};
