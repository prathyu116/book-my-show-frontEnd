import React from 'react';
//Hoc
import DefaultHoc from './Hoc/DefaultHoc';

//pages
import HomePages from './Pages/HomePages';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
//HoC


const App = () => {
  return (
    <>
     <DefaultHoc path="/" exact component={HomePages} />
     
     </>
    
  )
}

export default App;
