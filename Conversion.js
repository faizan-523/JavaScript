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
