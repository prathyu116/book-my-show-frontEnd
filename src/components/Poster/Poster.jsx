import React from 'react';

const Poster = (props) => {
    console.log(props)
    return (
        <div className="flex flex-col items-start gap-2 px-3">
            <div className="h-70">
                <img src={props.src} alt={props.alt} className="w-full h-full rounded-xl"/>
               
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white":"text-gray-700"}`}>  
              { props.title}
            </h3>
            <p className={`text-sm font-bold ${props.isDark ? "text-white":"text-gray-700"}`}>{props.subtitle}</p>
        </div>
    )
}

export default Poster;