import Stat from "@/components/Stat";
import { IMG_URL } from "@/public/constants/image";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.id}`,
    description: `Detail 페이지 : ${params.id}`,
  };
}

const ChampionDetailPage = async ({ params }: Props) => {
  const info = await fetchChampionDetail(params.id);
  return (
    <div className="flex min-h-screen flex-col items-center px-6 py-8">
      <div className="text-center">
        <div className="mb-5 text-4xl font-extrabold text-blue-800 sm:text-5xl">
          {info.name}
        </div>
        <div className="text-2xl font-bold text-gray-500">{info.title}</div>
      </div>
      <Image
        src={`${IMG_URL}/champion/${params.id}.png`}
        width={200}
        height={200}
        alt={info.name}
        className="mt-4 h-auto w-[150px] sm:w-[200px]"
      />
      <p className="mt-4 max-w-2xl px-4 text-center text-gray-500">
        {info.blurb}
      </p>
      <div className="mt-6 w-full max-w-lg p-6 shadow-lg">
        <p className="border-b pb-2 text-center text-2xl font-bold">
          챔피언 스탯
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Stat name="공격력" stat={info.info.attack} />
          <Stat name="방어력" stat={info.info.defense} />
          <Stat name="마법력" stat={info.info.magic} />
          <Stat name="난이도" stat={info.info.difficulty} />
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
