"use server";

import { FETCH_URL } from "@/public/constants/url";
import { ChampionDetail, ChampionWithId } from "@/types/champion";
import { ItemWithId } from "@/types/Item";

// 아이템 리스트를 받아오는 fetch 함수
export const fetchItemList = async (): Promise<ItemWithId[]> => {
  const response = await fetch(`${FETCH_URL}/item.json`, {
    cache: "force-cache",
  });

  const { data } = await response.json();
  const items: ItemWithId[] = Object.entries(data);
  return items;
};

// 챔피언 리스트를 받아오는 fetch 함수
export const fetchChampionList = async (): Promise<ChampionWithId[]> => {
  const response = await fetch(`${FETCH_URL}/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });

  const { data } = await response.json();
  const champions: ChampionWithId[] = Object.entries(data);
  return champions;
};

// 챔피언 상세 정보를 받아오는 fetch 함수
export const fetchChampionDetail = async (
  name: string,
): Promise<ChampionDetail> => {
  const response = await fetch(`${FETCH_URL}/${name}.json`, {
    cache: "no-store",
  });

  const { data } = await response.json();
  const info: ChampionDetail = data[name];
  return info;
};
