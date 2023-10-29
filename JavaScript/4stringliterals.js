//String literals || Template literals


var mname = "Avengers"
var type = "Action"
var rating = 4.5
var category = "Hollywood"

//es5


//An Avengers is an Action movie with rating of 4.5 and from the category Hollywood

var output = "An " + mname + " is an " + type + " movie with rating of " + rating + " and from the category " + category
console.log("ES5 Output => ", output)

//es6

//`` => backtick
// ${} => interpolation => substitute the value


var output = `An ${mname} is an ${type} movie with rating of ${rating} and from the category ${category} `
console.log("ES6 Output => ", output)