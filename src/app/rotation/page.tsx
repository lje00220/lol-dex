"use client";

import { useRotations } from "../hooks/queries";
import ChampionList from "@/components/ChampionList";
import Loading from "@/components/Loading";

const RotationPage = () => {
  const { data: rotations, isPending } = useRotations();

  if (isPending) return <Loading />;

  return (
    <div className="px-5">
      <h2 className="my-5 text-3xl font-extrabold text-blue-300">
        챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-10 gap-y-5">
        {rotations?.map((rotation) => (
          <ChampionList champion={rotation} key={rotation[0]} />
        ))}
      </div>
    </div>
  );
};

export default RotationPage;
