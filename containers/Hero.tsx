"use client";

import { useEffect, useState } from "react";
import useColorMode from "@/hooks/useColorMode";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [colorMode] = useColorMode();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const videoSource =
    colorMode === "dark" ? "/assets/hero-dark.mp4" : "/assets/hero-light.mp4";
  const videoSourceMobile =
    colorMode === "dark"
      ? "/assets/darkMode-mobile.mp4"
      : "/assets/light-mode.mp4";
  const textColor = colorMode === "dark" ? "dark:text-white" : "";

  return (
    <div className="hero relative">
      <div
        className={`${textColor}lg:pl-24 pl-4 z-10 lg:w-1/2 w-full lg:text-left text-center mt-32`}
      >
        <h1 className="head-text">
          Send and receive money in multiple currencies.
        </h1>
        <p className="sentence lg:my-0 my-4 lg:w-96 sm:w-80 w-full">
          Get one card and transact in over 150 countries. Fast-paced crypto and
          fiat transfer.
        </p>
        <div className="flex items-center my-3 lg:justify-start justify-center">
          <img
            src={"/assets/google-store.png"}
            className="download"
            alt="google-store"
          />
          <div className="sm:m-2 m-1" />
          <img
            src={"/assets/apple-store.png"}
            className="download"
            alt="apple-store"
          />
        </div>
      </div>

      {isMobile ? (
        <video
          src={videoSourceMobile}
          autoPlay
          loop
          className="absolute bottom-0 right-0 h-full w-full object-cover"
        />
      ) : (
        <video
          src={videoSource}
          autoPlay
          loop
          className="absolute top-0 right-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default Hero;
