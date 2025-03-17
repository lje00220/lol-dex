"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
