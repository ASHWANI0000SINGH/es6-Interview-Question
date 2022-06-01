import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyBook } from '../redux/actions'
import { BUY_BOOK } from '../redux/actions/actionType'

const Book2 = () => {
    const myState=useSelector((state)=>{
        return state.noOfBooks
    })
    console.log(myState);
    const dispatch =useDispatch();
    
    const send=(e)=>{
        console.log(e)
        dispatch(buyBook())
    }
  return (
    <div>Books

          <h1>Available {myState} </h1>
          <button onClick={(e)=>send(e)} >buy book</button>
      </div>
  )
}

export default Book2