import React from 'react';
import PlayFilter from '../components/PlaysFilter/PlaysFilter';
import Poster from '../components/Poster/Poster';

const PlayPage = () => {
    return (
        <>

            <div className="container mx-auto px-4 ">
                {/* lg:flex lg:flex-row-reverse */}
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="w-7/12 ">
                        <h2 className="text-2xl font-bold mb-4">Place In Kanhangad</h2>
                        <div className="flex flex-wrap">

                            <div className="w-1/2  md:w-1/3 my-3  lg:w-1/4">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                                    title="TVK cultural presents Ponniyin Selven"
                                    subtitle="Tamil $600"
                                />
                            </div>
                            <div className="w-1/2 my-3 lg:w-1/4 md:w-1/3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                                    title="TVK cultural presents Ponniyin Selven"
                                    subtitle="Tamil $600"
                                />
                            </div>
                            <div className="w-1/2 my-3 lg:w-1/4 md:w-1/3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                                    title="TVK cultural presents Ponniyin Selven"
                                    subtitle="Tamil $600"
                                />
                            </div>
                            <div className="w-1/2 my-3 lg:w-1/4 md:w-1/3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                                    title="TVK cultural presents Ponniyin Selven"
                                    subtitle="Tamil $600"
                                />
                            </div>
                            <div className="w-1/2 my-3 lg:w-1/4 md:w-1/3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                                    title="TVK cultural presents Ponniyin Selven"
                                    subtitle="Tamil $600"
                                />
                            </div>
                            <div className="w-1/2 my-3 lg:w-1/4 md:w-1/3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                                    title="TVK cultural presents Ponniyin Selven"
                                    subtitle="Tamil $600"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-1/4">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div className="flex flex-col gap-3">
                        <PlayFilter title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
                        <PlayFilter title="Language" tags={["Today","Tomorrow","This Weekend"]}/>
                        <PlayFilter title="Category" tags={["Today","Tomorrow","This Weekend"]}/>
                        </div>
                       

                    </div>
                </div>


            </div>
        </>
    )
}

export default PlayPage;
