import { fetchChampionDetail } from "@/utils/serverApi";
import React from "react";

type Params = {
  params: {
    id: string;
  };
};

const ChampionDetailPage = async ({ params }: Params) => {
  const data = await fetchChampionDetail(params.id);
  console.log(data);
  // const info = data[params.id];
  // console.log(ChampionDetail);
  return <div></div>;
};

export default ChampionDetailPage;
