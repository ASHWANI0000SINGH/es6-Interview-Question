import React from "react";

const ArrowFun = () => {
  let user1 = {
    name: "ashwani",
    getName: function () {
      console.log("normal", this);
    },
    getNameArrow: () => {
      console.log("arrow", this);
    },
  };
  user1.getName();
  user1.getNameArrow();
  return (
    <div>
        <h1>Arrow FUnction</h1>
      {/* when we use arrow funtion it does not have this it uses the parent this i.e window object
but when we use normal function we need to use this to bind the becuase it uses have own this */}
    </div>
  );
};

export default ArrowFun;
