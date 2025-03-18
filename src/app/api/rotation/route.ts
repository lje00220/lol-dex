import { API_URL } from "@/public/constants/url";
import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

// 라우트 핸들러

export async function GET() {
  const response = await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      "X-Riot-Token": process.env.RIOT_API_KEY || "",
    },
  });

  const data = await response.json();
  const rotations: number[] = data.freeChampionIds;
  const championList = await fetchChampionList();
  const result = rotations?.map((rotation) =>
    championList.find((champion) => Number(champion[1].key) === rotation),
  );

  return NextResponse.json(result);
}
