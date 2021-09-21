import React from 'react';
import ReadMoreReact from 'read-more-react';

const Poster = (props) => {
   
    return (
        <div className="flex flex-col items-start gap-2 px-5 ">
            <div className="h-70">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="{props.title}" className="w-full h-full rounded-xl" />

            </div>
            <h3 className={`text-xl font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
                {props.title}
            </h3>
            <p className={`text-xs font-bold ${props.isDark ? "text-white" : "text-gray-700"} `}>

                <ReadMoreReact text={props.overview}
                    min={10}
                    ideal={20}
                    max={100}
                    readMoreText={<span className="text-blue-700">click here to read more...</span>} />
            </p>
        </div>
    )
}

export default Poster;
