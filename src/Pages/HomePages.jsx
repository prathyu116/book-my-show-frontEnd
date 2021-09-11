import React from 'react'
import Entertainment from '../components/Entertainment/Entertainment';
import Premier from '../components/Premier/Premier';

const HomePages = () => {
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
            {/* <div className="flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                className="w-full h-full"
                alt="rupau" />
             
            </div> */}
            <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                className="w-full h-full"
                alt="rupay" />
             
            </div>
             <Premier />
            </div>
        
        </div>
        </div>
        </>
    )
}

export default HomePages;
