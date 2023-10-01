import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliderr() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3700,
    };

  return (
    <>
      <Slider {...settings} className='h-full overflow-hidden'>
            <img  alt="getir-slider-img" className="w-full h-[500px] object-cover border-none" src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg' />
            <img  alt="getir-slider-img" className="w-full h-[500px] object-cover border-none" src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg'/>
            <img  alt="getir-slider-img" className="w-full h-[500px] object-cover border-none" src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg'/>
        </Slider>
    </>
  )
}

export default Sliderr
