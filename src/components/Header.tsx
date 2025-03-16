import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row items-center justify-evenly bg-slate-800 p-3 text-white">
        <Link href={"/"}>홈</Link>
        <Link href={"/champions"}>챔피언 목록</Link>
        <Link href={"/items"}>아이템 목록</Link>
        <Link href={"/rotation"}>챔피언 로테이션</Link>
      </div>
    </header>
  );
};

export default Header;
