import React from "react";

const Features = () => {
  return (
    <div className="py-16 bg-black text-white text-center">
      <h3 className="head-text-three">As featured on</h3>
      <div className="features-container my-6">
        <img src={'/assets/company-1.png'} alt="tunes"/>
        <img src={'/assets/company-2.png'} alt="ted" className="mx-16"/>
        <img src={'/assets/channels.png'} alt="channels"/>
      </div>
    </div>
  );
};

export default Features;
