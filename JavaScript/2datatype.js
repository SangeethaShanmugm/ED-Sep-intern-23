//true  = 1
//false  = 0


true + true
//1 + 1 => 2
true + false
//1 + 0 => 1
10 + true
//10 + 1 => 11


var a = "Hii" + true
console.log(a)//Hiitrue

"true" + "true" //"truetrue"

"true" - "true" //NaN

//Type casting  => convert from one datatype to another datatype

var a = "10"
var b = "20"
a + b //"1020"
console.log(parseInt(a) + parseInt(b))// 10 + 20 => 30

var a = "10.34"
var b = "20.11"
console.log(parseInt(a) + parseInt(b))//30
console.log(parseFloat(a) + parseFloat(b))//30.45


var a = "Hii"
parseInt(a)//NaN

//es6

var a = "10.34"
var b = "20.11"
console.log(Number(a) + Number(b))
console.log(+a + +b)

var a = "123Delhi"
var b = "Delhi123"
var c = "123Delhi123"

console.log(parseInt(a))//123
console.log(parseInt(b))//NaN
console.log(parseInt(c))//123

console.log(Number(a))//NaN
console.log(Number(b))//NaN
console.log(Number(c))//NaN