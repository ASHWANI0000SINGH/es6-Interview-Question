// class User{
//     constructor(name,age){
//         this.name=name,
//         this.age=age
//         console.log("called");
//     }
//     getData(){
//         console.log(this.name+ this.age)
//     }
// }
// var user1= new User("ashwani",24);
// user1.getData();


// Spread operator

// var a=[1,2,3];
// var b=[4,5,...a,6];
// console.log(b)

// a.map((item,i)=>{
//     console.log(item,i)
// })
// var a=[1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]
// var b=a.flat().flat().flat();
// console.log(a);
// console.log(b);


// trim

// let a="           my name is ashwani                   ";
// console.log(a.trimStart());

// Tempelate literal

// let a= [10,20,30]
// let res= a.findIndex((item)=>{
//     return item>20;
// })
// console.log(res)

// bind and this 
// parent class uses this 

// let user1={
//     name:"ashwani",
//     getName:function(){
//         console.log("normal", this);
//     },
//     getNameArrow:()=>{
//         console.log("arrow", this);
//     }
// }
// user1.getName();
// user1.getNameArrow();


// when we use arrow funtion it does not have this it uses the parent this i.e window object
// but when we use normal function we need to use this to bind the becuase it uses have own this

// classes
// class fruits, animals, employee, students

// class Fruits{
//     name="oraange"
//     constructor(){
//         console.log("called ",this.name)
//     }
//     getName(){
//         console.log(this.name);
//     }
// }
// let fruit1= new Fruits();
// fruit1.getName();

// classes are the blue print of items
// CONSTRUCTOR IS SPEACIAL METHOD FOR creating and initilaizing obj
// they are auto called when class instance is created


// class Dryfruits{
//     name="akrot"
//     constructor(){
//         console.log("called  dry fruit CONSTRUCTOR ")
//     }
//     getDryFruit(){
//         console.log("CALEED dry fruit function");
//     }
// }
// class Fruits extends Dryfruits{
//     name="oraange"
//     constructor(){
//         super()
//         console.log("called fruit CONSTRUCTOR ")
//     }
//     getFruitName(){
//         console.log("CALEED fruit name function ");
//     }
// }
// let fruit1= new Fruits();
// let fruitdry= new Dryfruits();
// fruit1.getFruitName();
// fruit1.getDryFruit();

// inheritance is basically accessing parent property from child class
// we need to user extend the child class to parent class 
// we need to use super key word in constructor to access the functuon

// lexial scope


// let data={
//     list:"friends",
//     name:["ash","pkj","shr"],
    // getFriend:(()=>{
    //     console.log(this.list);
    // })
//     getFriend:function(){
//         this.name.map((item)=>{
//             console.log(this.list,item)

//         })

//     }
// }
// data.getFriend();

// lexical scope is the scope where the variable has scope 
// or we can use arrow function as it uses parent this

// rest operat

// function fruits(...a){
//     console.log(a)
// }
// fruits("apple","mango","kiwi","bananna","grapes","watermelob");

// rest opeartor add the reamaning paramter into Array
// let a=[1,2,3];
// let b=[4,...a,5]
// console.log(b);

// promise

// let a=2;


// let newPromise= new Promise((res,rej)=>{
//     setTimeout(()=>{
//         a=3;
//         res("done");
//     },2000);
// })
// newPromise.then(()=>{
//     console.log(a);
// })

// promise in es6 
// its a way when api calls are made it delasys for some Time
// so we need to wait for api to fetch data from server
// that is y we need to use promise 
// and we also need to use .then and res to get data

// Destructring of Array

// unpacking array into variables
// we can also use rest parameter to get the reaminig items using rest operator

// const fruits=["apple","mango","grapes","kiwi"];
// const  [f1,...f2]= fruits;
// console.log(f1,f2);

// destructuring object
// destruture happen based on keys

// const user={name:"ashwani",age:24};
// const {name,age}=user;
// console.log(name,age)


// rest parameter is userd in parameter
// spread is used in arguments

// const fruits=["apple","mango","banana"]

// function fun(a,b,c){
//     console.log(a,b,c);
// }
// fun(...fruits)

// Strings methods

// let course="js is cool";
// console.log(course.slice(0,8))
// console.log(course.splice(0,8))

// const xyz=[1,2,3,4,5,6]
// console.log(xyz);
// const xyz2=xyz.slice(0,2);
// console.log(xyz2);
// console.log(xyz.slice(0,2));
// console.log(xyz);


// splice alters old array 
// const xyz1=[1,2,3,4,5,6]
// console.log(xyz1);
// const spliceArr=xyz1.splice(0,7);
// console.log(spliceArr);
// console.log(xyz1.splice(0,2));
// console.log(xyz1);

// const arr=["a","s","h"];
// console.log(arr.slice(2,6))

const arr= [1,2,3,4,5];
//  arr.forEach((item)=>{
//     console.log(item)
// })

// console.log(arr.includes(1));
// arr.filter((item)=>console.log(item>3));
// const filtered=arr.filter((item)=>item>3);
// console.log(filtered);

// const mapArr=arr.map((item)=>item+2);
// console.log(mapArr);
// console.log(arr);

const reduceArr=arr.reduce(((tot,val)=>tot+val),0)
console.log(reduceArr)
// const sortArr=arr.sort((a,b)=>a>b?-1:1)
// const sortArr1=arr.sort((a,b)=>a>b?1:-1)


// console.log(sortArr);
// console.log(sortArr1);
// const myName="ashwani";
// const arrName=myName.from(myName);
// console.log(myName);
// console.log(arrName);
