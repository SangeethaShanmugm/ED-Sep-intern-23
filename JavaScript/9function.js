var a = 10
var b = 20
console.log(a + b)

var a = 50
var b = 20
console.log(a + b)

// keyword nameOfFunction(parameters){
//     return output
// }
// nameOfFunction(arguments)

function sum(a, b) {
    return a + b
}
console.log(sum(10, 20))//function call
console.log(sum(100, 20))
console.log(sum(50, 70))


//camelCase 
function isEvenOdd(num) {
    let out;
    if (num % 2 == 0) {
        out = `Number ${num} is Even`
    } else {
        out = `Number ${num} is Odd`
    }
    return out
}

console.log(isEvenOdd(30))
console.log(isEvenOdd(13))

//ES6 => arrow function 

const isEvenOdd1 = (num) => {
    let out;
    if (num % 2 == 0) {
        out = `Number ${num} is Even`
    } else {
        out = `Number ${num} is Odd`
    }
    return out
}


const sum1 = (a, b) => {
    var c = a + b
    console.log(c)
    return c
}

console.log(sum1(5, 5))

let welcome = () => console.log("Welcome Everyone😀😀")
welcome()

let age = 40
let greet = age > 25 ? () => console.log("Adult") : () => console.log("Teenage")
// 40 > 25
greet()//Adult