import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [size,setSize]=useState(window.screen.width);
    const actualWidth=()=>{
        setSize(window.innerWidth);
        console.log(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth)
        // return()=>{
        // window.removeEventListener("resize",actualWidth)

        // }
    },[size])
  return (
    <div>
        <h1>UseEffectHook</h1>
        <h2>Actual size of screen</h2>
        <span>{size}</span>



    </div>
  )
}

export default UseEffectHook