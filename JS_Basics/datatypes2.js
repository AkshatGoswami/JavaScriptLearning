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
console.log(id == id2);

const bigNumber = 83929119105678n;

console.log(typeof outsideTemp);



const heros = ["Shaktiman", "SpiderMan", "SuperMan"];
let myObj = {
    name : "Akshat",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
    
}


