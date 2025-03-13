"use client";

import { ChampionWithId } from "@/types/champion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const IMGURL = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion";

const RotationPage = () => {
  const [rotations, setRotations] = useState<ChampionWithId[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/rotation")
      .then((res) => res.json())
      .then((data) => setRotations(data));
  }, []);

  return (
    <div className="grid grid-cols-6 gap-4">
      {rotations?.map((rotation) => {
        const [id, championDetail] = rotation;
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
  );
};

export default RotationPage;
