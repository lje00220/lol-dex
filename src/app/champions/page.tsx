import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IMGURL = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion";

const ChampionPage = async () => {
  const champions = await fetchChampionList();

  return (
    <div className="px-5">
      <h2 className="my-5 text-3xl font-extrabold text-blue-300">
        챔피언 목록
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {champions.map((champion) => {
          const [id, championDetail] = champion;
          return (
            <Link
              href={`/champions/${id}`}
              key={id}
              className="h-auto min-h-[250px] w-[180px] border-2 border-solid p-2"
            >
              <Image
                src={`${IMGURL}/${id}.png`}
                width={100}
                height={100}
                alt={championDetail.name}
                className="mx-auto my-2"
              />
              <div className="text-lg font-bold text-blue-600">
                {championDetail.name}
              </div>
              <div>{championDetail.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionPage;
