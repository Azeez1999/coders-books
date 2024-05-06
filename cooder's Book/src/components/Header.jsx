import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderImage from "../assets/header_images/headerImage2.png";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <img src={HeaderImage} alt="" />
    </div>
  );
};

export default Header;

{
  /* <Slider {...settings}>
        <div className="h-screen w-[80%] bg-black flex flex-col items-center justify-center ">
          
        </div>
        <div className="h-screen w-[80%] bg-orange-500 flex flex-col items-center justify-center ">
          
        </div>
      </Slider> */
}
