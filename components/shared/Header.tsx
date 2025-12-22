"use client";
import Image from "next/image";
import { Sun, Moon, ChevronFirst, ChevronLast } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className="
        relative w-full flex items-center justify-between
        px-6 sm:px-8 lg:px-20
        py-3 sm:py-4
        bg-[#D5D5D53D] dark:bg-[#3F3C3C63]
        transition-colors duration-300
      "
    >
      {/* Left Section: Logo */}
      <div className="flex items-center z-10">
        <p className="block sm:hidden text-[20px] font-semibold text-black dark:text-white">
          To Do List
        </p>

        <Image
          src={
            theme === "dark"
              ? "/images/header/logodark.png"
              : "/images/header/logolight.png"
          }
          alt="logo"
          width={80}
          height={42}
          className="hidden sm:block"
        />
      </div>

      <div
        className="
          flex items-center justify-center
          gap-2 sm:gap-4 lg:gap-12
          text-xs sm:text-sm lg:text-base
          text-black dark:text-white
          absolute left-1/2 -translate-x-1/2
        "
      >
        <ChevronFirst size={14} className="sm:size-4 cursor-pointer" />
        <p className="sm:text-[14px] whitespace-nowrap">1 February-2024</p>
        <ChevronLast size={14} className="sm:size-4 cursor-pointer" />
      </div>

      <div className="flex items-center gap-4 sm:gap-4 z-10">
        <button
          onClick={toggleTheme}
          className="
            p-1.5 sm:p-2
            bg-white dark:bg-black
          border-2 border-[#F8F8FA]  dark:border-[#262626] rounded-lg
            
            cursor-pointer
          "
        >
          {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        <Image
          src="/images/header/ellipse.png"
          alt="avatar"
          width={46}
          height={46}
          className="w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-full"
        />

        <p className="hidden sm:block text-[16px] text-black dark:text-white">
          Username
        </p>
      </div>
    </header>
  );
};

export default Header;
