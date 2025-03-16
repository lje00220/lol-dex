"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-slate-800 p-4 text-lg text-white">
      <div className="flex">
        <nav className="hidden w-full justify-evenly gap-6 md:flex">
          <Link href="/">홈</Link>
          <Link href="/champions">챔피언 목록</Link>
          <Link href="/items">아이템 목록</Link>
          <Link href="/rotation">챔피언 로테이션</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>
      </div>
      {isOpen && (
        <nav className="mt-3 flex flex-col items-center gap-4 md:hidden">
          <Link href="/">홈</Link>
          <Link href="/champions">챔피언 목록</Link>
          <Link href="/items">아이템 목록</Link>
          <Link href="/rotation">챔피언 로테이션</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
