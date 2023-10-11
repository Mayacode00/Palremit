import React from "react";

const Register = () => {
  return (
    <div className="bg-black flex sm:flex-row flex-col justify-between lg:px-[100px] sm:px-[30px] px-0 text-white sm:mx-0 mx-8 sm:rounded-none rounded-3xl">
      <div className="flex flex-col sm:items-start items-center justify-center sm:text-left text-center lg:w-[560px] w-[320px] sm:px-0 px-7 lg:mb-0 sm:mb-28 mb-52 ">
        <h2 className="head-text-five sm:mt-0 mt-20">One app for all things money</h2>
        <button className="bg-green sentence text-[20px] rounded-[10px] py-[10px] px-[24px] mt-3">
          Get started
        </button>
      </div>
      <img src={"/assets/app.png"} alt="app" className="sm:h-full h-[350px] object-cover sm:rounded-b-0 rounded-b-3xl"/>
    </div>
  );
};

export default Register;
