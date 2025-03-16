import { IMG_URL } from "@/public/constants/image";
import { ROUTE } from "@/public/constants/route";
import { ChampionWithId } from "@/types/champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ChampionProps = {
  champion: ChampionWithId;
};
const ChampionList = ({ champion }: ChampionProps) => {
  const [id, championDetail] = champion;
  return (
    <Link
      href={`${ROUTE.CHAMPION}/${id}`}
      className="flex h-auto min-h-[250px] max-w-[180px] flex-col items-center border-2 border-solid p-2"
    >
      <Image
        src={`${IMG_URL}/champion/${id}.png`}
        width={100}
        height={100}
        alt={championDetail.name}
        className="mx-auto my-2 h-auto w-full"
      />
      <div className="text-center text-lg font-bold text-blue-600">
        {championDetail.name}
      </div>
      <div className="text-center">{championDetail.title}</div>
    </Link>
  );
};

export default ChampionList;
