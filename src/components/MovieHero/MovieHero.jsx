import React from 'react';
import { BiChevronRight, BiSearch,BiMenu,BiChevronDown ,BiChevronLeft,BiShareAlt} from 'react-icons/bi';

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden" >
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/malignant-et00122449-22-07-2021-05-15-06.jpg" alt="" />
            </div>
            {/* //md */}
            <div className="hidden md:block lg:hidden">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/malignant-et00122449-22-07-2021-05-15-06.jpg" alt="" />

            </div>
            {/* larger screen */}
            <div className="relative hidden lg:block" style={{ height: "31rem" }}>
                <div className="absolute h-full w-full z-10"
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}
                />
                <div className="absolute z-30 flex left-24 top-10 items-center justify-between">
                    <div className=" w-64 h-96  ">
                        <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" className="w-hull h-full rounded-lg" />

                    </div>
                    <div className="flex flex-col gap-5 w-84">
                        <h1 className="  font-bold		 text-white whitespace-normal" style={{ fontSize: "36px", whiteSpace: "initial" }}>Shang-Chi and the Legend of the Ten Rings</h1>

                        <div className="flex gap-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="" className="h-8 w-8 " />

                            <span className="text-white text-2xl font-bold">91%</span>
                            <span className="text-white text-2xl ">34.5K  </span>
                            <a className="text-white text-2xl " href="">rating ></a>

                        </div>
                        <div className="bg-blackish-700 flex items-center justify-between px-2 py-8 rounded-xl" style={{ width: "440px" }}>
                            <div>
                                <h4 className="text-white text-lg font-bold">Add Your Rating & Review</h4>
                                <span className="text-gray-300 text-base">Your rating matter</span>
                            </div>
                            <div>
                                <button className="bg-white  text-black font-bold py-2 px-4 rounded-xl">Rate Now</button>
                            </div>
                        </div>
                        {/* imax2D */}
                        <div>
                            <div className="  ">
                                <div className=" flex flex-wrap px-1 bg-gray-50 font-bold  w-52">
                                    <a href="" className="hover:underline">2D</a>
                                    <span>,</span>
                                    <a className="hover:underline" href="">3D</a>
                                    <span>,</span>
                                    <a className="hover:underline" href="">IMAX 2D</a>
                                    <span>,</span>
                                    <a className="hover:underline" href="">IMAX 4D</a>
                                    {/* <span>,</span>
                        <a href="">4DX</a> */}
                                </div>
                                <div className=" flex flex-wrap my-2 font-bold px-1	  bg-gray-50 font-light " style={{ width: "fit-content" }}>
                                    <a className="hover:underline" href="">MALAYALAM</a>
                                    <span>,</span>
                                    <a className="hover:underline" href="">ENGLISH</a>
                                    <span>,</span>
                                    <a className="hover:underline" href="">TAMIL</a>
                                    <span>,</span>
                                    <a className="hover:underline" href="">TELUGU</a>
                                    <span>,</span>
                                    <a className="hover:underline" href="">HINDI</a>
                                </div>
                                <p className="text-white">
                                    2h 12m
                                    •
                                    Action
                                    ,
                                    Adventure
                                    ,
                                    Fantasy
                                    •
                                    UA
                                    •
                                    3 Sep, 2021
                                </p>
                            </div>
                            <button class="bg-Button-300 mt-6  text-white font-bold  rounded py-4 px-12">
                                Book Tickets
                            </button>
                        </div>
                    </div>
                    {/* share button */}
                    <div>
                    <div className=" flex items-center justify-between  rounded-xl w-64 h-60" style={{backgroundColor:"rgba(0,0,0,0.9)"}}>
                            <div>
                            <BiShareAlt className="w-full h-full text-white"/>
                            </div>
                            <div>
                              <p>share</p>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster"
                    // https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/malignant-et00122449-22-07-2021-05-15-06.jpg
                    className="w-full h-full "
                />

            </div>
        </>
    )
}

export default MovieHero;
