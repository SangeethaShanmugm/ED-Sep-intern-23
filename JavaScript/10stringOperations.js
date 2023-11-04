var uname = "John"
uname.toUpperCase()//JOHN

var uname = "John"
uname.toLowerCase()//john

var city = "Bangalore"
//B     a     n     g    a     l     o      r    e
//0     1     2     3    4     5     6      7    8   => position/index
//-9   -8    -7    -6   -5    -4     -3    -2   -1
console.log(city.length)//9


console.log(city[4])//a
console.log(city[1])//a

console.log(city.charAt(4))//a
console.log(city.charAt(1))//a
console.log(city.charAt(8))//e

console.log(city.charAt(-1))//""
console.log(city.charAt(-2))//""

console.log(city.at(-1))//e
console.log(city.at(-2))//r

var a = "John"
var b = "john"

a == b //John == john => false
a.toLowerCase() == b.toLowerCase()
//john  == john => true

//slice(startIndex) => extract the string characters

var city = "amsTerdam"
//a   m    s     T    e    r    d    a     m
//0   1    2     3    4    5    6    7     8 
//                                  -2    -1

console.log(city.slice(1))//msTerdam
console.log(city.slice(2))//sTerdam

console.log(city.slice(5))//rdam

//slice(startIndex, endIndex)
console.log(city.slice(2, 6))//sTer

console.log(city.slice(0, 5))//amsTe
console.log(city.slice(0, -1))//amsTerda
console.log(city.slice(0, -3))//amsTer
console.log(city.slice(-2, 2))//""
console.log(city.slice(-3, -1))//da

