const marvel_Heros = ["Thor", "IronMAn", "CaptainAmerica"];
const dc_Heros = ["SuperMan", "BatMan", "WonderWoman"];

// marvel_Heros.push(dc_Heros);
// console.log(marvel_Heros);
const myArray = marvel_Heros.concat(dc_Heros);
console.log(myArray);

const myArr2 = [...marvel_Heros, ...dc_Heros];
console.log(myArr2);

console.log(Array.isArray("Akshat"));
console.log(Array.from("Akshat"));

let mark1 = 10
let mark2 = 20
let mark3 = 30
let mark4 = 40

const myArr3 = Array.of(mark1, mark2, mark3, mark4)
console.log(myArr3)



