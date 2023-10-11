import { GrPlay } from "react-icons/gr";

const Media = () => {
  return (
    <div className="media-user my-16 text-green">
      <h1 className="head-text-two">Media</h1>
      <p className="sentence">Here's what our customers think</p>
      <div className="relative lg:mx-80 sm:mx-10 mx-6 mt-10">
        <img
          src={"/assets/gif.gif"}
          alt="gif"
          className="w-full object-cover rounded-3xl sm:h-96 h-72"
        />
        <div className="absolute top-0 h-full w-full text-white bg-gradBlack rounded-3xl flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <GrPlay style={{ color: "#ffffff", cursor: "pointer" }} />
            <p className="sentence text-xl">Play testimonial</p>
          </div>
          <div className="text-white text-center bg-opacGray sm:p-6 p-2 rounded-3xl absolute bottom-0 sm:max-h-full max-h-28">
            <h6 className="head-text-four">Palremit the game changer</h6>
            <p className="sentence-three lg:mx-48 sm:mx-10 mx-0">
              "Palremit has been a game-changer for my business. It's incredibly
              fast and easy to use, and the payment confirmations are a great
              feature. Highly recommended!" - Maciej Marian Szukala, LEGALBASE
              CRW LIMITED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
