//Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

//To Show Specific Date
let myCreatedDate = new Date(2023, 0, 10)
console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("2023-01-10")
console.log(myCreatedDate3.toLocaleString());


//TimeStamps

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //Comparing
//Converting MiliSeconds to Seconds
console.log(Math.floor(Date.now()/1000));

//Other Methods of date

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth);









