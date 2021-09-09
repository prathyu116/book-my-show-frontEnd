import React from 'react'

export const NextArrows = (props) => {
    // const {className,style,,onclick } = props
    return (
        <>
            <div className={props.className} style={{ ...props,backgroundColor:"rgba(0, 0, 0, 0.4)",width:"50px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={props.onClick}/>
        </>
    );
}

export const PrevArrows = (props) => {
    return (
        <>
            <div className={props.className} style={{ ...props,backgroundColor:"rgba(0, 0, 0, 0.4)",width:"50px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={props.onClick}/>
        </>
    );
}

