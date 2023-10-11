"use client";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "As a freelance designer, getting paid by international clients was a major headache due to transaction limitations and fees. Palremit has been a game-changer for me. Its neo-banking feature allows me to receive payments seamlessly, and I can instantly access my funds. It's like having a local bank account in multiple countries!",
      userName: "Kevin M., Freelance Graphic Designer from Kenya",
      bgColor: "bg-yellowOne",
      imgUrl: "/assets/woman.jpg",
    },
    {
      text: "Sending money back home to Africa was always a hassle—until Palremit came along. The platform's instant remittances make it incredibly easy for me to support my family back in Ghana. Plus, my relatives can withdraw the money from their local ATMs without any issues. Palremit has made financial support effortless and instantaneous.",
      userName: "Nana A., Expatriate living in the United States",
      bgColor: "bg-deepYellow",
      imgUrl: "/assets/reviewer2.jpg",
    },
    {
      text: "I travel frequently for business and deal with multiple currencies. With Palremit's hybrid card and neo-banking features, I can manage all my transactions and exchanges in one place. The ability to fund my wallet in KES and then use it globally has been a life-saver. Palremit is the ultimate financial tool for the modern professional!",
      userName: "Samson S. Marketing Maven",
      bgColor: "bg-mintGreen",
      imgUrl: "/assets/reviewer3.jpg",
    },
    {
      text: "I used to dread currency exchanges during my international travels. The process was often inconvenient and costly. Then I found Palremit! Now, I can easily exchange NGN to any currency and withdraw cash from ATMs in over 150 countries. The convenience is simply unparalleled!",
      userName: "Amina O., Globe-trotter from Nigeria",
      bgColor: "bg-cream",
      imgUrl: "/assets/reviewer4.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  const reorderedTestimonials = [
    ...testimonials.slice(currentIndex),
    ...testimonials.slice(0, currentIndex),
  ];
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 650;

  return (
    <div className="media-user xl:px-32 sm:mx-10 px-4">
      <h1 className="head-text-two text-green">Hear from our users</h1>
      <div className="sm:bg-green bg-white rounded-2xl my-10 flex justify-between relative lg:min-h-96 min-h-[20rem]">
        {reorderedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              transform:
                index === 0
                  ? "translateX(0rem) translateY(0rem)"
                  : `translateX(${
                      index * (isMobile ? 0.4 : 1)
                    }rem) translateY(${index * (isMobile ? 0.4 : 1)}rem)`,
            }}
            className={`container lg:p-10 p-6 rounded-2xl absolute sm:top-10 top-0 left-0 ${testimonial.bgColor} transition-transform duration-500 ease-in-out`}
          >
            <img
              src={"/assets/Quotes.svg"}
              alt="quotes"
              className="lg:w-20 w-10"
            />
            <p className="sentence sentence-four text-2xl text-left font-bold my-3">
              "{testimonial.text}"
            </p>
            <p className="sentence testimonials lg:mt-16 mt-2">
              {testimonial.userName}
            </p>
          </div>
        ))}
        <div />
        <img
          src={reorderedTestimonials[0].imgUrl}
          alt="reviewer"
          className="lg:w-96 w-56 rounded-tr-2xl rounded-br-2xl lg:h-full h-96 object-cover sm:block hidden"
        />
      </div>
    </div>
  );
};

export default Testimonials;
