import { Features } from "@/components";
import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <>
      <div className="background-black">
        <h1 className="head-text-two">Get 2 Cards</h1>
        <p className="uppercase font-light">
          One physical and virtual cards for all transactions
        </p>
        <div className="flex lg:flex-row flex-col justify-center mx-auto my-4">
          <div className="bg-greenTwo rotation group hover:bg-gradient-to-t from-darkOrange to bg-darkGreen">
            <h1 className="head-text-three">Physical Cards</h1>
            <p className="sentence text-lg mb-20">
              Fund your debit PHYSICAL card with crypto, fiats, and withdraw,and
              spend anywhere{" "}
            </p>
            <img
              src={"/assets/Card-Palremit.png"}
              alt="card"
              className="card"
            />
          </div>
          <div className="lg:mx-4 mx-0 lg:my-0 my-4" />
          <div className="bg-orange rotation group hover:bg-gradient-to-t from-greenThree to bg-darkOrange">
            <h1 className="head-text-three">Virtual Cards</h1>
            <p className="sentence text-lg mb-20">
              Fund your debit VIRTUAL card with crypto, fiats, and withdraw,and
              spend anywhere
            </p>
            <img src={"/assets/card-two.png"} alt="card" className="card" />
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Cards;
