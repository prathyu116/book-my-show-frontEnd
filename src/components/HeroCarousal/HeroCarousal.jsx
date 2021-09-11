import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrows,PrevArrows } from './Arrows';
const HeroCarousal = () => {
    const settingsLG = {
        autoplay:true,
        centerMode: true,
        centerPadding: '100px',
        arrows:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrows />,
        prevArrow:<PrevArrows />,
        
      };
    const settings = {
        autoPlay:true,
        dots: true,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrows />,
        prevArrow:<PrevArrows />,
      };
      const images = [
          
          "https://images.unsplash.com/photo-1631028353342-9c573a9bc957?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ]
    return (
        <>
{/* show for mediun and small screen */}
         <div className="lg:hidden">  
         <Slider {...settings}>
                {
                    images.map((image)=>{
                        return (
                            <div className="w-full h-44 md:h-64 py-2">
                                <img src={image} alt="images" srcset="" className="w-full h-full rounded-md"/>
                            </div>
                        )
                    })
                }

            </Slider>
         </div>
         <div className="hidden lg:block">  
         <Slider {...settingsLG}>
                {
                    images.map((image)=>{
                        return (
                            <div className="w-full h-80 px-2 py-3">
                                <img src={image} alt="images" srcset="" className="w-full h-full rounded-md"/>
                            </div>
                        )
                    })
                }

            </Slider>
         </div>


            
        </>
    )
}

export default HeroCarousal;
