import React, { useRef } from 'react'

const UseRefComp = () => {
    const inputRef=useRef(null);
    const handleInput=()=>{
        console.log("fun called");
        inputRef.current.value=100;
        inputRef.current.focus();
        inputRef.current.style.color="red"
    }
  return (
    <div>

        <h1>UseRfef</h1>
        <p>Focus,color,value, dom manipulate  hanlde using ref</p>
        <input type="number" name="" id=""  ref={inputRef}/>
        <button onClick={()=>handleInput()}> Handle inpput</button>
    </div>
  )
}

export default UseRefComp