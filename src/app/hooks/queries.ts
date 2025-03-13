import { ChampionWithId } from "@/types/champion";
import { fetchRotations } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";

export const useRotations = () => {
  return useQuery<ChampionWithId[]>({
    queryKey: ["rotations"],
    queryFn: fetchRotations,
  });
};
