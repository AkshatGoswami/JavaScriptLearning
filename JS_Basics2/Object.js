// Constructor
// Singleton


//Objects by  Literals 

const mySym = Symbol("Key1")

const JsUser = {
    name: "Akshat",
    "full name": "Akshat Goswami",
    [mySym]: "Key2",
    age: 18,
    isLogged: false,
    lastLoginDays: ["Monday", "Saturday"]  
}

console.log(JsUser["full name"]);
console.log(JsUser.age);
console.log(JsUser.mySym);

JsUser.name = "AkshatG"
console.log(JsUser.name);
//Object.freeze(JsUser)

JsUser.name = "Akki"
console.log(JsUser.name);

JsUser.greeting = function(){
    console.log("Hello JS USers");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS USers, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





