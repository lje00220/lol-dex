"use client";

import { ROUTE } from "@/public/constants/route";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ThemeChanger from "./ThemeToggle";

/**
 * 헤더 컴포넌트
 * 반응형 디자인으로 설계되었습니다.
 *
 * @returns {JSX.Element}
 */

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-slate-800 p-4 text-lg text-white">
      <div className="flex items-center justify-center">
        <nav className="hidden w-full justify-evenly gap-6 md:flex">
          <Link href={ROUTE.HOME}>홈</Link>
          <Link href={ROUTE.CHAMPION}>챔피언 목록</Link>
          <Link href={ROUTE.ITEM}>아이템 목록</Link>
          <Link href={ROUTE.ROTATION}>챔피언 로테이션</Link>
        </nav>
        <button className="md:hidden" onClick={handleToggleMenu}>
          <Menu size={28} />
        </button>
        <ThemeChanger />
      </div>
      {isOpen && (
        <nav className="mt-3 flex flex-col items-center gap-4 md:hidden">
          <Link href={ROUTE.HOME}>홈</Link>
          <Link href={ROUTE.CHAMPION}>챔피언 목록</Link>
          <Link href={ROUTE.ITEM}>아이템 목록</Link>
          <Link href={ROUTE.ROTATION}>챔피언 로테이션</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
