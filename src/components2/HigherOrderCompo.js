import React, { useState } from 'react'

const HigherOrderCompo   = () => {
  return (
    <div>
<h1>HigherOrderCompo</h1>
<HOCRed  cmp={Counter} />
<HOCGreen  cmp={Counter} />



    </div>
  )
}
function HOCRed(props){
    return <h2 style={{backgroundColor:"red", width:"200px"}}>{<props.cmp/>}</h2>
}

function HOCGreen(props){
    return <h2 style={{backgroundColor:"green", width:"200px"}}>{<props.cmp/>}</h2>
}


function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Count {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Update</button>
        </div>
    )
}

export default HigherOrderCompo