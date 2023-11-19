console.log(a)//undefined
//1000 lines of code
var a = 10
console.log(a)//10

//hoisting => behaviour in JS

//JIT process -> Just In Time Compilation
//GEC => Global execution Context

// Phases
//1. Compilation Phase - console.log - skip
//2. Execution Phase ->  JS, Context

//Example- 1

//1. Compilation Phase
console.log(a) //skip
var a = 10 //JS => Do you know a? No  | what is the value? => context => undefined
console.log(a)//skip


//2. Execution Phase 
console.log(a) //JS => Do you know a? Yes | what is the value? => context =>undefined
var a = 10 //JS => Do you know a? Yes | what is the value? => context => Note down the value of a  = 10
console.log(a)//JS => Do you know a? Yes | what is the value? => context => 10




//Example- 2 -> let 

//1. Compilation Phase
// console.log(z) //skip
// let z = 10 //JS => Do you know z? No  | what is the value? => context => don't initialize
// console.log(z)//skip


//2. Execution Phase
console.log(z) //JS => Do you know z? Yes | what is the value? => context => error
// => Uncaught ReferenceError: Cannot access 'z' before initialization
let z = 10
console.log(z)

console.log("hello")