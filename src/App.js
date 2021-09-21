import React from 'react';
//axios
import axios from 'axios';

//Hoc
import DefaultHoc from './Hoc/DefaultHoc';
import MovieHoc from './Hoc/MovieHoc';

//pages
import HomePages from './Pages/HomePages';
import MoviePage from './Pages/MoviePage';
import PlayPage from './Pages/PlayPage';

//css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

//axios default
axios.defaults.baseURL ="https://api.themoviedb.org/3";
axios.defaults.params={}
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;
const App = () => {
  return (
    <>
     <DefaultHoc path="/" exact component={HomePages} />
     <MovieHoc path="/movie/:id" exact component={MoviePage} />
     <DefaultHoc path="/plays" exact component={PlayPage}/>
     </>
    
  )
}

export default App;
