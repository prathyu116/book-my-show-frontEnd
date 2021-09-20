import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Entertainment from '../components/Entertainment/Entertainment';
import PosterSlider from '../components/PosterSlider/PosterSlider';
import PremierImage from '../config/TempPosters';

const HomePages = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        const reqPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopular(getPopularMovies.data.results)
        }
        reqPopularMovies()
    }, [])
    console.log("{popular}", popular);

    return (
        <>
            <div className="flex flex-col gap-10">


                <div className="container mx-auto px-4">

                    <h1 className="text-2xl font-bold text-gray-800 ">
                        The Best of entertainment
                    </h1>

                    <Entertainment />



                </div>
                <div className="bg-hi-700 py-16">

                    <div className="container mx-auto px-4 flex flex-col gap-3">
                        <div className="flex">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                className="w-full h-full"
                                alt="rupay" />

                        </div>

                        <PosterSlider title="premier" sub="Brand New Release n Friday" images={popular} isDark />

                    </div>

                </div>
                <div className="px-4 ">
                <PosterSlider title="premier" sub="Brand New Release n Friday" images={popular} isDark={false} />
                <PosterSlider title="premier" sub="Brand New Release n Friday" images={popular} />
                </div>
                
            </div>
        </>
    )
}

export default HomePages;
