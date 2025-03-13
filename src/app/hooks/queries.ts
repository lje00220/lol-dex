import { ChampionWithId } from "@/types/champion";
import { useQuery } from "@tanstack/react-query";

export const useRotations = () => {
  return useQuery<ChampionWithId[]>({
    queryKey: ["rotations"],
    queryFn: fetchRotations,
  });
};

const fetchRotations = async (): Promise<ChampionWithId[]> => {
  const response = await fetch("/api/rotation");
  const data: ChampionWithId[] = await response.json();
  return data;
};
