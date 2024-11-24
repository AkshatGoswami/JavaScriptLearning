const name = "Akshat"
const countRepo = 4
//console.log(name + countRepo + " Value"); //Older Way 

console.log(`Hello my name is ${name} and my repo count is ${countRepo}`);
// Modern Way of printing and mostly used in development

// Another way of declaring the String 

const gameName = new String("Akshat")
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-4,4)
console.log(anotherString);

//Trim And eplce Method in JavaScript

const newStringOne = "   Akshat     "
console.log(newStringOne);
console.log(newStringOne.trim());
//Trim Method Removes the Extra Space in code 
// Works only on the whiteSpaces and the Terminators

const url = "https://akshat.com/hitesh%20choudhary"
console.log(url.replace('%20', '_'))
console.log(url.includes('sundar'));

console.log(gameName.split('-'));
console.log("Happy Birthday");





