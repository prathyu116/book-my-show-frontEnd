import React from 'react'
import Slider from "react-slick";
import Poster from '../Poster/Poster';
import settings from '../../config/settinngs';
import PremierImage from '../../config/TempPosters';
const Premier = ({title,sub,images,isDark}) => {
   
      
   
   
  
    return (
        <>
        <div className="flex flex-col items-start py-4 px-5">
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <p className="text-white text-sm ">{sub}</p>
            </div>
            <Slider {...settings}>
                {
                    PremierImage.map((image)=>{
                       
                        return (
                           <Poster {...image} isDark={isDark}/>
                        )
                    })
                }

            </Slider>
          
        </>
    )
}

export default Premier;
