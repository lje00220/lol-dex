"use client";

import { useRotations } from "../hooks/queries";
import ChampionList from "@/components/ChampionList";

const RotationPage = () => {
  const { data: rotations, isPending, isError } = useRotations();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="px-5">
      <h2 className="my-5 text-3xl font-extrabold text-blue-300">
        챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {rotations?.map((rotation) => (
          <ChampionList champion={rotation} key={rotation[0]} />
        ))}
      </div>
    </div>
  );
};

export default RotationPage;
