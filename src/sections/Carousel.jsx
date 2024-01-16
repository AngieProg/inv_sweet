//import { data } from "../constants/constants";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useState } from "react";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex justify-center w-[400px] h-[400px] relative items-center">
        <BsArrowLeftCircle
          className="absolute w-[40px] h-[40px] left-[20px] cursor-pointer"
          onClick={prevSlide}
        />
        {data.map((item, idx) => {
          return (
            <img
              key={idx}
              src={item.img}
              alt={item.alt}
              className={
                slide === idx
                  ? "border-2 border-white rounded-lg object-cover"
                  : "hidden"
              }
            />
          );
        })}
        <BsArrowRightCircle
          className="absolute w-[40px] h-[40px] right-[20px] cursor-pointer"
          onClick={nextSlide}
        />
        <span className="flex absolute bottom-[20px]">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={
                  slide === idx
                    ? "bg-white w-[8px] h-[8px] rounded-full border-none outline-none mx-2 cursor-pointer"
                    : "w-[8px] h-[8px] rounded-full border-none outline-none mx-2 cursor-pointer bg-black"
                }
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
