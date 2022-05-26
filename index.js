1.// dynamic language;
// variable can change during run time
// var x=0;
// x++;
// x="text";
// x=true;
// -----------------------

// 2.  NUll
// let a=null;
// console.log( a);

// 3. Hoisting
// console.log(a);
// let a=10;

// 4.Global Variable
// const a=10;
//  function fun(){
//      console.log(a);
//  }
//  add();

// 5. varible declared without var

// function fun1 () {
//     y=10;
// }
// fun1();
// console.log(y);

// 'use strict';
// const z=10;
// function fun1 () {
//         y=10;
//     }
//     fun1();
// console.log(z);
// console.log(y);

// 6. Closure

// function fun1() {
//     var a=10;
//     function fun2(){
//         a++;
//         console.log(a);
//     }
//     fun2();
// }
// fun1();

// function fun1() {
//     var a=10;
//     function fun2(){
//         console.log(a)
//     }
//     return fun2;
// }
// var z=fun1();
// console.log(z);
// z();

// 7.IIFE

// (function () {
//     console.log("called");
//   })();
  
// 8.object creation

// const student1={
//     name:"ashwani",
//     age:25,
//     position:"se",
     
//        intro(){
//         console.log(`helli my name is ${this.name} and my age is ${this.age}`)
//     }

// }
// student1.intro();

// 9> Inheritance

// js uses object inheritance or prototypical inheritance
// inheritance is done using Prototype objext

// manager inherits from Employee or
// manager is child of employee
// every js object has prototype

// protype objext
// every js object has prototype obj
// inbuilt obj provided by JSON
// upto the prototype chain if property is not there
// if property is there inside object it will not go into prototype obj
// worked as linked First check same obj then goes to prototype object and prototypes prototyoe object 
// untill prototype object is null

// function Employee(){
//     this.Name="",
//     this.DoWork=function(){
//         console.log("Basic work")
//     }
// }

// function Manager(){
//     this.cabin="",
//     this.DoWork=function(){
//         console.log("Manage team")
//     }
// }
// var emp=new Employee();
// Manager.prototype=emp;
// var man= new Manager();
// man.Name="ashwani",
// man.Attendance;
// man.DoWork();
// console.log(man.Name, man.Attendance)

// 12. let
// Cannot access 'x' before initialization
// y undefined
// Cannot access 'z' before initialization

console.log(z); 
let x=4;
var y;
const z=3;