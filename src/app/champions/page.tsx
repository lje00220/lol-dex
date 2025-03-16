import ChampionList from "@/components/ChampionList";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

const ChampionPage = async () => {
  const champions = await fetchChampionList();

  return (
    <div className="px-5">
      <h2 className="my-5 text-3xl font-extrabold text-blue-300">
        챔피언 목록
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {champions.map((champion) => (
          <ChampionList champion={champion} key={champion[0]} />
        ))}
      </div>
    </div>
  );
};

export default ChampionPage;
