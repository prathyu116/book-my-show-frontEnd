import React from 'react'
import Slider from "react-slick";
import Poster from '../Poster/Poster';
import settings from '../../config/settinngs';
import PremierImage from '../../config/TempPosters';
const Premier = (props) => {
   
      
   console.log("==========>",props);
   
  
    return (
        <>
        <div className="flex flex-col items-start py-4 px-5">
            <h3 className={` ${props.isDark ? "text-white":"text-gray-700"} text-2xl font-bold tracking-wide`}>{props.title}</h3>
            <p className={` ${props.isDark ? "text-white":"text-gray-700"} text-sm`}>{props.sub}</p>
            </div>
            <Slider {...settings}>
                
                    {props.images.map((image)=>(
                        <Poster {...image} isDark={props.isDark}/>

                    )) }
                       
                       
                    
               

            </Slider>
          
        </>
    )
}

export default Premier;
