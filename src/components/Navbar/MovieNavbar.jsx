import React from 'react';
import { BiChevronRight, BiSearch,BiMenu,BiChevronDown ,BiChevronLeft,BiShareAlt} from 'react-icons/bi';

const Navsm = () => {
    return (
        <>
            <div className="text-white flex flex-row  items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    
                </div>
                <div className="h-8 w-8">
                    <BiShareAlt className="h-full w-full" />
                </div>
            </div>
        </>

    )

};
const Navmd = () => {
    return (
        <div className="w-full flex items-center bg-white gap-2 px-3 py-2 rounded-md">
            <BiSearch />
            <input type="search " className="w-full focus:outline-none" placeholder="Search for movie,events,plays,sports,activity..." />
        </div>

    )

};
const Navlg = () => {
    return (
        <div className="container mx-auto flex items-center justify-between">
            {/* first division */}
            <div className="flex items-center  gap-3  w-3/5">
                <div className="w-12 h-5">
                    <img className="w-full h-full" src="https://seeklogo.com/images/L/logo-business-solutions-logo-0B17BA8EB3-seeklogo.com.png" alt="" srcset="" />
                </div>
                <div className="w-full flex items-center bg-white gap-2 px-3 py-2 rounded-md">
                    <BiSearch />
                    <input type="search" className="w-full focus:outline-none" placeholder="Search for movie,events,plays,sports,activity..." />
                </div>
            </div>
            {/* second division */}
            <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs flex flex-row  items-center hover:text-white cursor-pointer	   pk111">
                    Kanhangad <BiChevronDown />
                </span>
                <button className="bg-Button-300 text-white text-sm px-2 py-1 rounded">
                    Sign In
                </button>
                <div className="w-8 h-8 text-white">
                <BiMenu  className="w-full h-full"/>
                </div>
            </div>
        </div>
    )
};
const MovieNavbar = () => {
    return (
        <>
        <nav className="lg:bg-NavCol-700 absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative px-3 py-4 ">
            <div className="md:hidden ">
                {
                    // Mobile Screen
                    <Navsm />

                }

            </div>
            <div className="hidden lg:hidden md:block ">
                {
                    // Tablet Screen
                    <Navsm />

                }

            </div>
            <div className="hidden lg:flex">
                {
                    // desktop Screen
                    <Navlg />

                }

            </div>
        </nav>
    </>
    )
}

export default MovieNavbar;
