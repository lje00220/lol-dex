import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        method: "GET",
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY || "",
        },
      },
    );

    const data = await response.json();
    const rotation: number[] = data.freeChampionIds;
    const championList = await fetchChampionList();
    const result = rotation.map((r) =>
      championList.find((c) => Number(c[1].key) === r),
    );
    console.log(result);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }
}
