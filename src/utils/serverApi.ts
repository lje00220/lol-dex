"use server";

import { ChampionDetail, ChampionWithId } from "@/types/champion";

const URL =
  "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json";

export const fetchItemList = async (): Promise<object> => {
  const response = await fetch(URL, {
    cache: "force-cache",
  });

  const { data } = await response.json();
  return data;
};

export const fetchChampionList = async (): Promise<ChampionWithId[]> => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
    {
      next: {
        revalidate: 86400,
      },
    },
  );

  // 타입 추가하기
  const { data } = await response.json();
  const champions: ChampionWithId[] = Object.entries(data);
  return champions;
};

export const fetchChampionDetail = async (
  name: string,
): Promise<ChampionDetail> => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${name}.json`,
    { cache: "no-store" },
  );

  const { data } = await response.json();
  const info: ChampionDetail = data[name];
  return info;
};

// export const fetchRotations = async (): Promise<ChampionWithId[]> => {
//   console.log(1234);
//   const response = await fetch("http://localhost:3000/api/rotation");
//   const data: ChampionWithId[] = await response.json();
//   console.log(data);
//   return data;
// };
