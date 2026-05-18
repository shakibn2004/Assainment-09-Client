"use client";

import { useTheme } from "next-themes";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <LuSun fill="#ff9f00"size={20} /> : <IoMoon fill="#ff9f00"size={20}/>}
    </button>
  );
};

export default ThemeToggle;