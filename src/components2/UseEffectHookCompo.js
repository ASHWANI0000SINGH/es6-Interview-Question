import React, { useEffect, useState } from "react";

const UseEffectHookCompo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(" use effect called.....");
    // return()=>{
    //   console.log("clean up.....")
    // }
  },[count]);
  return (
    <div>
      <h1>Hooks Practise: use effect</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default UseEffectHookCompo;
