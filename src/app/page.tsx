import Link from "next/link";
import React from "react";
import championImg from "../public/assets/champions.jpeg";
import itemImg from "../public/assets/items.jpeg";
import rotationImg from "../public/assets/rotation.jpeg";
import Image from "next/image";
import { ROUTE } from "@/public/constants/route";

/**
 * 홈 페이지(메인 페이지)
 *
 * @returns {JSX.Element}
 */

const Home = () => {
  return (
    <div className="mb-5 flex flex-col items-center justify-center gap-5 px-4">
      <h1 className="mt-5 text-center text-2xl font-extrabold sm:text-3xl md:text-4xl">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-center text-gray-500">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <Link
          href={ROUTE.CHAMPION}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            src={championImg}
            width={500}
            height={500}
            alt="champion"
            className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px]"
          />
          <p className="text-center text-blue-500">챔피언 목록 보기</p>
        </Link>
        <Link
          href={ROUTE.ROTATION}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            src={rotationImg}
            width={500}
            height={500}
            alt="rotation"
            className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px]"
          />
          <p className="text-center text-blue-500">금주 로테이션 확인</p>
        </Link>
        <Link
          href={ROUTE.ITEM}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            src={itemImg}
            width={500}
            height={500}
            alt="item"
            className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px]"
          />
          <p className="text-center text-blue-500">아이템 목록 보기</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
