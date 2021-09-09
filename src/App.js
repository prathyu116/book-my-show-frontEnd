import React from 'react';
import temp from './components/temp';
import DefaultHoc from './Hoc/DefaultHoc';
import './App.css'
//HoC


const App = () => {
  return (
    <>
     <DefaultHoc path="/" exact component={temp} />
     
    </>
  )
}

export default App
