// var  => we can redeclare and reassign ✅
// let  => we cannot redeclare but can reassign ✅
// const  => we cannot redeclare nor reassign ✅

var a = 10
// var a  => declaration
// a= 10 => assignment

//var - redeclare
var a = 10
var a = 11
console.log(a)//11

//var - reassign
var a = 10
a = 11
console.log(a)//11

//let-redeclare ❌
// let b = 10
// let b = 11
// console.log(b)//Uncaught SyntaxError: Identifier 'b' has already been declared


//let- reassign ✅
// let b = 10
// b = 30
// console.log(b)//30

//const - redeclare 

// const z = 10
// const z = 20
// console.log(z) //Uncaught SyntaxError: Identifier 'z' has already been declared 

//const - reassign 

const z = 10
z = 20
console.log(z) // Uncaught TypeError: Assignment to constant variable.
