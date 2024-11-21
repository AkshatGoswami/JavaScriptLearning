const accountId = 12345
let accountEmail = "akshat@gmail.com"
var accountPassword = "123"
accountCity = "Ghaziabad"

//accountId = 1
accountEmail ="abhi@g.com"
accountPassword ="567"
accountCity ="Hapur"

/*
var is no more used in the JS because of issue in block scope and function scope
To overcome this we use let
if we do not assign any value to the variable then it will consider it undefined by itself
we can also declare the variable witout using let and var by simply giving the name to he variable
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])
