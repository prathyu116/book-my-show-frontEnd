 //TRANFER ONE COMPONENT INTO ANOTHOR COMPONENTS
 //ANOTHER COMPONENT HAVE ADDITIONAL FEATURE

 import React from 'react';
import { Route } from 'react-router-dom';

//LAYOUTS
import MovieLayout from '../Layouts/MovieLayout'
 const MovieHoc = ({component:Component, ...rest}) => {
     //componet
     //props ->path,exact
     return (
       
         <>
             <Route 
             {...rest}
             component = {(props)=>(
                
                 <MovieLayout>
                    
                    <Component {...props} />
                 
                 </MovieLayout>

             )

             }
             
             />
         </>
     )
 }
 
 export default MovieHoc
 