import React, { useReducer, useState } from 'react'

const UseReducerComp = () => {
    const [count,setCount]=useState(0);
    const initialState=0;
    const reducer=(state,action)=>{
        console.log(state,action)
        if(action.type==="INC"){
            return state+1
        }else if(action.type==="DEC"){
            return state-1;
        }else{

            return state;
        }

    }
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        {/* <h1>use reducer component</h1>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <h1>Count {count}</h1>
        <button onClick={()=>{setCount(count-1)}}>-</button> */}

<h1>use reducer component</h1>
        <button onClick={()=>{dispatch({type:"INC"})}}>+</button>
        <h1>Count {state}</h1>
        <button onClick={()=>{dispatch({type:"DEC"})}}>-</button>

    </div>
  )
}

export default UseReducerComp