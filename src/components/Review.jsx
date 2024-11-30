"use client";

import React from 'react';
import Image from 'next/image'
import Slider from 'react-slick';

const Review = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
      const cards = [
        { 
            id: 1, 
            img: "/chairman.jpg",
            title: "Ibrahim Khan", 
            description: "I am happy with Neuron family" 
        },
        { 
            id: 2, 
            img: "/khan.jpg",
            title: "Ibrahim Khan", 
            description: "I love Neuron Academy" 
        },
        { 
            id: 3, 
            img: "/khan.jpg",
            title: "Ibrahim Khan", 
            description: "Awesome Test Practice" 
        },
        { 
            id: 4, 
            img: "/khan.jpg",
            title: "Ibrahim Khan", 
            description: "Oops!" 
        },
        { 
            id: 5, 
            img: "/khan.jpg",
            title: "Ibrahim Khan", 
            description: "Nice" 
        },
      ];

  return (
    <div className='container'>
        <h1 className='text-center text-[30px] font-semibold mb-5'>রিভিউ</h1>
        <Slider {...settings}>
            {cards.map((card) => (
                <div 
                key={card.id} className="card">
                <Image 
                    src={card.img} 
                    alt={card.title} 
                    width={200} 
                    height={200} 
                    className="card-image" 
                />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                </div>
                ))}
        </Slider>
    </div>
  );
};

export default Review
