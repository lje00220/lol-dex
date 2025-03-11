import { ChampionDetail } from "@/types/champion";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type Params = {
  params: {
    id: string;
  };
};

const ChampionDetailPage = async ({ params }: Params) => {
  const data: any = await fetchChampionDetail(params.id);
  const info: ChampionDetail = data[params.id];
  console.log(info);
  return (
    <div className="bg-black px-10">
      <div className="text-3xl font-extrabold text-red-600">{info.name}</div>
      <div className="text-2xl font-bold text-gray-600">{info.title}</div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${params.id}.png`}
        width={200}
        height={200}
        alt={info.name}
      />
      <p className="text-red-600">{info.blurb}</p>
      <div>
        <ul className="text-xl font-bold text-red-600">스탯</ul>
        <li className="text-red-600">공격력: {info.info.attack}</li>
        <li className="text-red-600">방어력: {info.info.defense}</li>
        <li className="text-red-600">마법력: {info.info.magic}</li>
        <li className="text-red-600">난이도: {info.info.difficulty}</li>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
