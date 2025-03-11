"use server";

const URL =
  "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json";

export const fetchItemList = async (): Promise<object> => {
  const response = await fetch(URL, {
    cache: "force-cache",
  });

  const { data } = await response.json();
  return data;
};

export const fetchChampionList = async (): Promise<object> => {
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
  return data;
};

export const fetchChampionDetail = async (name: string): Promise<object> => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/en_US/champion/${name}.json`,
    { cache: "no-store" },
  );

  const { data } = await response.json();
  return data;
};
