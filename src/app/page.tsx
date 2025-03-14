import Link from "next/link";
import React from "react";
import championImg from "../public/assets/champions.jpeg";
import itemImg from "../public/assets/items.jpeg";
import rotationImg from "../public/assets/rotation.jpeg";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mb-5 flex flex-col items-center justify-center gap-5">
      <h1 className="mt-5 text-3xl font-extrabold">리그 오브 레전드 정보 앱</h1>
      <p className="text-gray-500">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <Link
        href={"/champions"}
        className="flex flex-col items-center justify-center gap-4"
      >
        <Image src={championImg} width={500} height={500} alt="champion" />
        <p className="text-blue-500">챔피언 목록 보기</p>
      </Link>
      <Link
        href={"/rotation"}
        className="flex flex-col items-center justify-center gap-4"
      >
        <Image src={rotationImg} width={500} height={500} alt="rotation" />
        <p className="text-blue-500">금주 로테이션 확인</p>
      </Link>
      <Link
        href={"/items"}
        className="flex flex-col items-center justify-center gap-4"
      >
        <Image src={itemImg} width={500} height={500} alt="item" />
        <p className="text-blue-500">아이템 목록 보기</p>
      </Link>
    </div>
  );
};

export default Home;
