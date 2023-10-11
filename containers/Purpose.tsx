"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Purpose = () => {
  const content = [
    {
      header: "Instant Transfer",
      text: "Send and receive money globally",
      imageSrc: "/assets/instant-transfer.png",
    },
    {
      header: "Trade Crypto",
      text: "Buy and sell crypto",
      imageSrc: "/assets/trade-crypto.png",
    },
    {
      header: "Exchange Currencies",
      text: "Spend and exchange local currencies to all foreign currencies.",
      imageSrc: "/assets/exchange-currencies.png",
    },
  ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = content[currentContentIndex];

  return (
    <div className="background-black">
      <h1 className="head-text-two">One card for all Seasons</h1>
      <div className="flex md:flex-col-reverse flex-col-reverse justify-center">
        <div className="flex bg-darkGray md:px-10 px-6 py-4 rounded-3xl my-5 justify-between md:mx-auto mx-2">
          {content.map((item, index) => (
            <div
              key={index}
              className={`button-two ${
                index === currentContentIndex ? "bg-green" : "bg-LightGray"
              } ${index === 1 ? "mx-6" : ""}`}
            >
              <p className="button-two-text">{item.header}</p>
            </div>
          ))}
        </div>
        <div className="flex md:flex-row flex-col items-center md:mt-0 mt-10">
          <p className="sentence-two">{currentContent.text}</p>
          <Image
            src={currentContent.imageSrc}
            alt="image"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Purpose;
