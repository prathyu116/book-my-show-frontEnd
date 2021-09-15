import React from 'react'
import HeroCarousal from '../components/HeroCarousal/HeroCarousal';
import Navbar from '../components/Navbar/Navbar';

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <HeroCarousal />

                {props.children}
            </div>


        </>
    )
}

export default DefaultLayout;
