import react  from "react";
import {SampleNextArrow,SamplePrevArrow} from "./../components/HeroCarousal/Arrowmain";


const settings = {


    infinite: false,
    speed: 500,
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow />,
    prevArrow:<SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]




};
export default settings;