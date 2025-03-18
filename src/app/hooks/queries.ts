import { ChampionWithId } from "@/types/champion";
import { fetchRotations } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";

// 챔피언 로테이션 정보를 불러오는 useQuery 훅
export const useRotations = () => {
  return useQuery<ChampionWithId[]>({
    queryKey: ["rotations"],
    queryFn: fetchRotations,
  });
};
