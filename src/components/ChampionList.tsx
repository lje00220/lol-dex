import { ChampionWithId } from "@/types/champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IMGURL = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion";

type ChampionProps = {
  champion: ChampionWithId;
};
const ChampionList = ({ champion }: ChampionProps) => {
  const [id, championDetail] = champion;
  return (
    <Link
      href={`/champions/${id}`}
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
};

export default ChampionList;
