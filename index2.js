// class User{
//     constructor(name,age){
//         this.name=name,
//         this.age=age
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
// // console.log(b)

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
// fruit1.getFruitName();
// fruit1.getDryFruit();
// let fruitdry= new Dryfruits();

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

// function fruits(a,b,c,...d){
//     console.log(a,b,c,d)
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