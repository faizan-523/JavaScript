let value="23"

console.log(typeof value)
let newValue=Number(value)
console.log(typeof newValue)
console.log(newValue)

let id = "123ab"
let newId = Number(id)
console.log(typeof newId)
console.log(newId) // It will give output of Nan mean not a number

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn) //0 is converted to false because 0 is a falsy value

isLoggedIn = 1
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn) //1 is converted to true because 1 is a truthy value

/* non zero number is always converted to true 
if the string is empty it is converted to false otherwise true
if there is number and character in the string and it is converted to number
it will give output of Nan but if it is converted to boolean it will give true
if the value is null it is converted to false in boolean
*/