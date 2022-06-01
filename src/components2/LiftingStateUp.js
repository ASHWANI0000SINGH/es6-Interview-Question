import React from 'react'

const LiftingStateUp = (props) => {
  const dummyData="i am from child compo"
  return (
    <div>LiftingStateUp {props.data} <br />
    
    <button onClick={()=>props.fun(dummyData)}>Send</button>
    </div>
  )
}

export default LiftingStateUp