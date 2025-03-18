"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

/**
 * 다크모드, 라이트모드를 전환해주는 테마 변경 컴포넌트ㄴ
 *
 * @returns {JSX.Element}
 */

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 얼리 리턴을 통해 깜빡이는 현상 방지
  if (!mounted) {
    return;
  }

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <button onClick={handleTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default ThemeChanger;
