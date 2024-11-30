"use client";

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

    var setting = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/coverphoto.png",            
        },
        {
            id: 1,
            img: "/coverphoto1.png",            
        },
        {
            id: 2,
            img: "/coverphoto2.png",           
        },
    ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...setting}>
          {
            slideData.map((item) => (
              <Slide
                key={item.id}
                img={item.img}                
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
