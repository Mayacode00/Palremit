import React from "react";

const Globals = () => {
  const countries = [
    {
      flag: "/assets/emojione_flag-for-united-states.svg",
      country: "Dollar",
    },
    {
      flag: "/assets/Group.svg",
      country: "Pounds",
    },
    {
      flag: "/assets/emojione_flag-for-nigeria.svg",
      country: "Naira",
    },
    {
      flag: "/assets/emojione_flag-for-ghana.svg",
      country: "Ghana",
    },
    {
      flag: "/assets/emojione_flag-for-kenya.svg",
      country: "Kenyan Shilling",
    },
    {
      flag: "/assets/emojione_flag-for-uganda.svg",
      country: "Ugandan Shilling",
    },
    {
      flag: "/assets/emojione_flag-for-india.svg",
      country: "Rupee",
    },
    {
      flag: "/assets/emojione_flag-for-switzerland.svg",
      country: "Swiss Franc",
    },
  ];
  return (
    <div className="flex justify-center items-center my-10 mx-auto lg:max-w-[900px] max-w-[700px] text-white sm:block hidden">
      <div className="bg-green text-center flex flex-col justify-center rounded-3xl p-10">
        <h1 className="head-text-two">Global Payment</h1>
        <p className="sentence">
          A single account that allows you use your local currency to transact
          business in 150 countries.
        </p>
        <div className="flex flex-wrap justify-center">
          {countries.map((country, index) => (
            <div key={index} className="bg-white flex py-3 px-5 rounded-[30px] mx-2 my-2 items-center text-black">
              <img src={country.flag} alt="countries-flag" />
              <p className="button-two-text ml-2">{country.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Globals;
