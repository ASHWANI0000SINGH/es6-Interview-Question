import { createContext, lazy, Suspense } from "react";
import "./App.css";
import Book from "./components/Book";
import Book2 from "./components/Book2";
import ArrowFun from "./components2/ArrowFun";
import Child from "./components2/Child";
import ContextHook from "./components2/ContextHook";
import FunctionChild from "./components2/FunctionChild";
import UseEffectHookCompo from "./components2/UseEffectHookCompo";
import LifeCycleMethod from "./components2/LifeCycleMethod";
import Parent from "./components2/Parent";
import UseEffectHook from "./components2/UseEffectHook";
import React from "react";
import UseRefComp from "./components2/UseRefComp";
import UseMemoComp from "./components2/UseMemoComp";
import LazyAboutComp from "./components2/LazyAboutComp";
import LiftingStateUp from "./components2/LiftingStateUp";
import HigherOrderCompo from "./components2/HigherOrderCompo";
import Nav from "./components3/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components3/Home";
import About from "./components3/About";
import Contact from "./components3/Contact";
import UseReducerComp from "./components2/UseReducerComp";
const LazyLoadingComp = lazy(() => import("./components2/LazyHomeComp"));

function App() {
  let name = "ashwani";

  function parentFunction(dummyData) {
    console.log("parent func", dummyData);
  }
  return (
    <div className="App">
      <UseReducerComp/>
      {/* <Nav/>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/" exact={true
        
        
        } element={<Home/>}></Route>


      </Routes>

 */}

      {/* <HigherOrderCompo/> */}
      {/* <LiftingStateUp fun={parentFunction} data ={name}/> */}

      {/* <Suspense fallback={<div> please wait...</div>}>
      <LazyLoadingComp/>
      </Suspense> */}

      {/* <UseMemoComp/> */}
      {/* <UseRefComp/> */}
      {/* <Book2/> */}
      {/* <Book/> */}
      {/* <Parent/> */}
      {/* <LifeCycleMethod/> */}
      {/* <UseEffectHook/> */}
      {/* <UseEffectHookCompo/> */}
      {/* <ArrowFun/> */}
      {/* <FunctionChild/> */}
      {/* <Child /> */}
    </div>
  );
}

export default App;
