import React from 'react';
import { FaArrowRight ,FaArrowLeft} from "react-icons/fa";

export const  SampleNextArrow=(props)=> {
    const { className, style, onClick } = props;
    return (
   
  <FaArrowRight 
  className={className}
        style={{ ...style, display: "block",color:"white", background: "grey",width:"50px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center" ,borderRadius:"50%",zIndex:"99",marginRight:"-3%",padding:"10px"}}
        onClick={onClick}
  />
    );
  }
  
  export const  SamplePrevArrow=(props)=> {
    const { className, style, onClick } = props;
    return (
        <FaArrowLeft 
        className={className} 
              style={{ ...style, display: "block",color:"white", background: "grey",width:"50px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center" ,borderRadius:"50%",zIndex:"99",marginLeft:"-3%",padding:"10px"}}
              onClick={onClick}
        />
    );
  }