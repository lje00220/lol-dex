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
