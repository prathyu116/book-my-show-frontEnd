import React from 'react';

const PosterPlay = (props) => {
   
    return (
        <div className="flex flex-col items-start gap-2 px-5 ">
            <div className="h-70">
                <img src={props.src} alt="play image" className="w-full h-full rounded-xl" />

            </div>
            <h3 className="text-lg font-bold text-gray-700">
                {props.title}
            </h3>
            <p className="text-xs font-bold text-gray-700">{props.subtitle}

               
            </p>
        </div>
    )
}

export default PosterPlay;
