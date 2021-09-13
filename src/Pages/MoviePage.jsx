import React from 'react'
import MovieHero from '../components/MovieHero/MovieHero';
import { BiCameraMovie } from "react-icons/bi";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from '../components/HeroCarousal/Arrowmain';
const MoviePage = () => {

    const CastComponet = (props) => {
        return (
            <>
                <div className="flex flex-col items-center mt-5 px-2">

                    <div className=" flex gap-1 w-auto h-full ">
                        <img src={props.cast} alt="entertainment card" className="w-full h-full rounded-full" />
                    </div>
                    <p className="text-gray-600 font-semibold">{props.name}</p>
                    <p className="text-gray-500 font-medium">{props.char}</p>
                </div>


            </>
        )
    }
    const CrewComponet = (props) => {
        return (
            <>
                <div className="flex flex-col items-center  mt-5 px-2">

                    <div className=" flex  w-auto  h-full ">
                        <img src={props.image} alt="entertainment card" className="w-full h-full rounded-full" />
                    </div>
                    <p className="text-gray-600 font-semibold">{props.name}</p>
                    <p className="text-gray-500 font-medium">{props.role}</p>
                </div>


            </>
        )
    }
    const cast = [
        {
            Cast_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
            Cast_name: "Awafskes",
            Cast_Char: "as katy"
        },
        {
            Cast_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
            Cast_name: "Awafskes",
            Cast_Char: "as katy"
        },
        {
            Cast_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
            Cast_name: "Awafskes",
            Cast_Char: "as katy"
        },
        {
            Cast_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
            Cast_name: "Awafskes",
            Cast_Char: "as katy"
        },
        {
            Cast_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
            Cast_name: "Awafskes",
            Cast_Char: "as katy"
        },
        {
            Cast_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
            Cast_name: "Awafskes",
            Cast_Char: "as katy"
        },
        {
            Cast_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
            Cast_name: "Awafskes",
            Cast_Char: "as katy"
        },
    ]
    const crew = [
        {
            crew_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
            crew_name: "Kevin Feige",
            crew_role: "producer"
        },
        {
            crew_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
            crew_name: "Kevin Feige",
            crew_role: "producer"
        },
        {
            crew_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
            crew_name: "Kevin Feige",
            crew_role: "producer"
        },
        {
            crew_src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
            crew_name: "Kevin Feige",
            crew_role: "producer"
        }
    ]
    const settings = {


        infinite: false,
        speed: 500,
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div>
            <MovieHero />
            <div className="my-12 container mx-auto lg:w-1/2 lg:ml-64 ">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                    <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>


                <div>
                    <h1>Applicable offers</h1>
                    <div className="flex items-start gap-2 bg-yellow-100 border-4 border-dashed border-yellow-500 p-3 rounded-md w-96">
                        <div className="w-8 h-8">
                            <BiCameraMovie className="w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-900 text-xl">
                                Fimlmy Pass
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99

                            </p>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="flex flex-col ">


                    <div >
                        <h1 className="text-2xl font-bold">Cast</h1>

                        <Slider {...settings}>
                            {
                                cast.map((cast) => {
                                    return (
                                        <CastComponet cast={cast.Cast_src} name={cast.Cast_name} char={cast.Cast_Char} />
                                    )
                                })
                            }
                        </Slider>


                    </div>
                    <div className="my-8">
                        <hr />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">Crew</h1>

                        <Slider {...settings}>
                            {
                                crew.map((crew) => {
                                    return (
                                        <CrewComponet image={crew.crew_src} name={crew.crew_name} role={crew.crew_role} />
                                    )
                                })
                            }
                        </Slider>


                    </div>
                </div>
            </div>
        </div>



    )
}

export default MoviePage
