"use client";
import { useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { TiAdjustBrightness } from "react-icons/ti";
import useColorMode from "@/hooks/useColorMode";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const toggleDarkMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className={`navbar-header dark:bg-black `}>
        <div className="flex justify-between items-center">
          <img
            src={"/assets/logo-light.svg"}
            alt="logo"
            className="sm:w-[213px] w-32 sm:h-[48px] h-10 md:w-52 md:h-12"
          />
          <div className="items-center hidden sm:flex">
            <button className="button-one">get started</button>
            <div className="bg-black flex items-center justify-center p-2 rounded-lg ml-2 cursor-pointer">
              {colorMode === "light" ? (
                <BiSolidMoon
                  style={{ color: "#fff" }}
                  onClick={toggleDarkMode}
                />
              ) : (
                <TiAdjustBrightness
                  style={{ color: "#fff" }}
                  onClick={toggleDarkMode}
                />
              )}{" "}
            </div>
          </div>
          <div className="sm:hidden">
            {toggleMenu ? (
              <AiOutlineClose
                style={{
                  height: 32,
                  width: 32,
                  color: colorMode === "dark" ? "#fff" : "inherit",
                }}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <FiMenu
                style={{
                  height: 32,
                  width: 32,
                  color: colorMode === "dark" ? "#fff" : "inherit",
                }}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </div>
      </header>
      {toggleMenu && (
        <div className="h-40 w-full px-6 dark:bg-black bg-white absolute top-16 z-40 transition-all sm:hidden">
          <div className="flex items-end w-48 my-4">
            <button className="button-one">create account</button>
            <div className="bg-black flex items-center p-2 rounded-lg ml-2 cursor-pointer h-7 w-7">
              {colorMode === "light" ? (
                <BiSolidMoon
                  style={{ color: "#fff" }}
                  onClick={() => setColorMode("dark")}
                />
              ) : (
                <TiAdjustBrightness
                  style={{ color: "#fff" }}
                  onClick={() => setColorMode("light")}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
