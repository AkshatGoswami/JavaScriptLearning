// Datatypes are of two types : Primitive And Non Primitive(Refernce type)
//Primitive 
// 7 Types : String, Number, Boolean, Symbbol, BigInt, Null, Undefined
//Non Primitive 
// Array, Object, Function

const score = 100;
const scoreValue = 100.32;

const isLoggedIn = false;
const outsideTemp = null;
 const value1 = undefined;

 const id = Symbol('123')
 const id2 = Symbol('123')
//console.log(id == id2);

//const bigNumber = 83929119105678n;

//console.log(typeof outsideTemp);



const heros = ["Shaktiman", "SpiderMan", "SuperMan"];
let myObj = {
    name : "Akshat",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
    
}

// Memory : Stack and Heap in JavaScript
// Stack(Primitve Type) And Heap(Non Primitive Type)
// Example Stack
let one = "Akshat"
let two = one
two = "Paneer"
console.log(one);
console.log(two);
// OUtput one = Akshat and two = Paneer
//because in stack memory copy is shared among variables so, if you change one it will definately that variable only

//Example Heap

let userOne = {
    email: "Akshat@google.com",
    upi: "akshat@ybl"
}
let userTwo = userOne
userTwo.email = "Sanu@google.com"
console.log(userOne.email);
console.log(userTwo.email);
// output UserOne = Sanu@google.com And userTwo = Sanu@google.com
//Because in Heap Memory The refrence is shared among the variables so, thet value of both the variables is changef




