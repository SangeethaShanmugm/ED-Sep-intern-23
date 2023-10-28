// string => "hii" "Hiii" "56546" "536rfdsfdg" "true"
// Number => 4535 432424543 4354.4543 .5436456
// Boolean => true false

//es5

var a = "Hii"

// var a  => declaration
// a = "Hii" => assignment

var b = 10
var c = true

console.log("Hello")


console.log(typeof a)//string
console.log(typeof b)//number
console.log(typeof c)//boolean

var d = 10.5
console.log(typeof d)


var a = 10
var b = 20
a + b //addition 
console.log(a + b) // 10  + 20 => 30
console.log(b % a) // 20 /10 => 0


5 % 2 //1
5 % 3 //2
5 % 4 //1
5 % 5 //0

2 % 4  //2
3 % 4 //3

var a = "Hii"
var b = "Javascript"

a + b//concat => "Hii" + "Javascript" => "HiiJavascript"
console.log(a + b)

console.log(a - b)//NaN =>Not a Number
console.log(a * b)//NaN =>Not a Number
console.log(a / b)//NaN =>Not a Number

// string + string = string
// string + number = string
// number + string = string
// number + number = number

var a = "10" + 20 + 30
console.log(a)
"1020" + 30
"102030"

10 + "20" + 30
"1020" + 30
"102030"

10 + 20 + "30"
30 + "30"
"3030"

console.log("10a" - 1)//NaN
console.log("10" - 1)//9
console.log(10 - "1")//9
console.log(10 - "1a")//NaN


"dhskjfydifjgnfkgn" + "fdskjgjdkfng"
"dhskjfydifjgnfkgn" - "fdskjgjdkfng"
"20" - 10
"20" + 10