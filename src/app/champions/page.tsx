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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-10 gap-y-5">
        {champions.map((champion) => (
          <ChampionList champion={champion} key={champion[0]} />
        ))}
      </div>
    </div>
  );
};

export default ChampionPage;
