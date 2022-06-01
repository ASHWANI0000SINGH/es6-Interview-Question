import React, { useMemo, useState } from 'react'

const UseMemoComp = () => {
   const [count,setCount] =useState(0);
   const [item,setItem] =useState(10);
   const multiCountMemo=useMemo(function multiCount(){
    console.log("multicount called.....")
    return count*5;
},[count]);
   

  return (
    <div>
        <h1>use Memo</h1>
        <p>compnononet unwanted update, performance </p>
        {multiCountMemo}
        <button onClick={()=>{setCount(count+1)}}> Inc Count</button> <span> {count}</span> <hr />
        <button onClick={()=>{setItem(item*10)}}> Inc Item</button><span> {item}</span> <hr />



    </div>
  )
}

export default UseMemoComp