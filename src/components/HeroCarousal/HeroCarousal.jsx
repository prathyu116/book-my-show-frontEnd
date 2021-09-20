import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrows,PrevArrows } from './Arrows';
const HeroCarousal = () => {
    const [images,setImages ]=useState([])
   
     useEffect(()=>{
       const  reqNowPlayMovie = async() => {
           const getImage = await axios.get("/movie/now_playing");
          setImages(getImage.data.results);

       }
       reqNowPlayMovie()

     },[])
    
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
     
    return (
        <>
{/* show for mediun and small screen */}
         <div className="lg:hidden">  
         <Slider {...settings}>
                {
                    images.map((image)=>{
                        return (
                            <div className="w-full h-44 md:h-64 py-2 ">
                                <img src={image} alt="images" srcset="" className="w-full h-full rounded-md 	"/>
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
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="images" srcset="" className="w-full h-full rounded-md"/>
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
