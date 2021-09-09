 //TRANFER ONE COMPONENT INTO ANOTHOR COMPONENTS
 //ANOTHER COMPONENT HAVE ADDITIONAL FEATURE

 import React from 'react';
import { Route } from 'react-router-dom';

//LAYOUTS
import DefaultLayout from '../Layouts/DefaultLayout'
 const DefaultHoc = ({component:Component, ...rest}) => {
     //componet
     //props ->path,exact
     return (
       
         <>
             <Route 
             {...rest}
             component = {(props)=>(
                
                 <DefaultLayout>
                    
                    <Component {...props} />
                 
                 </DefaultLayout>

             )

             }
             
             />
         </>
     )
 }
 
 export default DefaultHoc
 