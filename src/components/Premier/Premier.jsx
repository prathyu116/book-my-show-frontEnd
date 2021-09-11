import React from 'react'
import Slider from "react-slick";
import Poster from '../Poster/Poster';
import {SampleNextArrow,SamplePrevArrow} from '../HeroCarousal/Arrowmain';
const Premier = () => {
   
      
   
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
    const premierImage =[
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg" ,
            alt: "schenchi",
            title:"shshhshhshshhsh  hshhshjs" ,
            subtitle: "hoor/addad/adad"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg" ,
            alt: "schenchi",
            title:"shshhshhshshhsh  hshhshjs" ,
            subtitle: "hoor/addad/adad"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg" ,
            alt: "schenchi",
            title:"shshhshhshshhsh  hshhshjs" ,
            subtitle: "hoor/addad/adad"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg" ,
            alt: "schenchi",
            title:"shshhshhshshhsh  hshhshjs" ,
            subtitle: "hoor/addad/adad"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg" ,
            alt: "schenchi",
            title:"shshhshhshshhsh  hshhshjs" ,
            subtitle: "hoor/addad/adad"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg" ,
            alt: "schenchi",
            title:"shshhshhshshhsh  hshhshjs" ,
            subtitle: "hoor/addad/adad"
        },
    ]
    return (
        <>
        <div className="flex flex-col items-start py-4">
            <h3 className="text-white text-xl font-bold">Premier</h3>
            <p className="text-white text-sm ">Brand New Release n Friday</p>
        </div>
            <Slider {...settings}>
                {
                    premierImage.map((image)=>{
                       
                        return (
                           <Poster {...image} isDark/>
                        )
                    })
                }

            </Slider>
        </>
    )
}

export default Premier;
