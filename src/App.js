import React from 'react';
//Hoc
import DefaultHoc from './Hoc/DefaultHoc';
import MovieHoc from './Hoc/MovieHoc';

//pages
import HomePages from './Pages/HomePages';
import MoviePage from './Pages/MoviePage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
//HoC


const App = () => {
  return (
    <>
     <DefaultHoc path="/" exact component={HomePages} />
     <MovieHoc path="/movie/:id" exact component={MoviePage} />
     
     </>
    
  )
}

export default App;
