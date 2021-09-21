import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Entertainment from '../components/Entertainment/Entertainment';
import PosterSlider from '../components/PosterSlider/PosterSlider';
import PremierImage from '../config/TempPosters';

const HomePages = () => {
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topMovie, setTopMovie] = useState([]);
    useEffect(() => {
        const reqPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopular(getPopularMovies.data.results)
        }
        reqPopularMovies()

        const reqUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcoming(getUpcomingMovies.data.results)
        }
        reqUpcomingMovies()

        const reqTopratedMovie = async () => {
            const getreqTopratedMovie = await axios.get("/movie/top_rated");
            setTopMovie(getreqTopratedMovie.data.results)
        }
        reqTopratedMovie()
    }, [])
    console.log("{popular}", popular);

    return (
        <>
            <div className="flex flex-col gap-10">


                <div className="container mx-auto px-4 flex flex-col">

                    <h1 className="text-2xl font-bold text-gray-700 tracking-tight py-3">
                        The Best of Entertainment
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

                        <PosterSlider title="Premiers" sub="Brand New Release every Friday" images={popular} isDark />

                    </div>

                </div>
                <div className="px-4 ">
                <PosterSlider title="Upcoming" sub="Ucoming New Release on theater" images={upcoming} isDark={false} />
                <PosterSlider title="Top Rated" sub="Top Rated Movie " images={topMovie} />
                </div>
                
            </div>
        </>
    )
}

export default HomePages;
