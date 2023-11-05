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


var city = "amsTerdam"
city.charAt(0).toUpperCase()//A

city.slice(1).toLowerCase()//msterdam

city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
"A" + "msterdam" // Amsterdam

city = "paRIs"
city.charAt(0).toUpperCase() + city.slice(3).toLowerCase()
"P" + "is" //"Pis"

var uname = "AbdulKalam"
uname.length//10

var uname = "  AbdulKalam .  "
console.log(uname.length)//16
console.log(uname.trim())//AbdulKalam .

var a = "I am learning Javascript";
a.replace("Javascript", "JS")//I am learning JS

var a = "JavaScript I am learning Javascript";
a.replace("Javascript", "JS")//JavaScript I am learning JS

var a = "JavaScript I am learning JavaScript";
a.replace(/JavaScript/g, "JS")//JS I am learning JS

var name = "  AbdulKalam .  "
console.log(name.replaceAll(" ", ""))//AbdulKalam.


//replaceAll(pattern, replacement)

const string = "Hello everyone hi hi"
let pattern = "hi"
let replacement = "hey"
let new_string = string.replaceAll(pattern, replacement)
console.log(new_string)//Hello everyone hey hey

const a1 = "Hello everyone good good day"
console.log(a1.replace(/good/g, "?"))//Hello everyone ? ? day

//split

var a = "https://github.com/SangeethaShanmugm/ED-Sep-intern-23"
console.log(a.split("/"))//['https:', '', 'github.com', 'SangeethaShanmugm', 'ED-Sep-intern-23']

const link = "https://github.com/SangeethaShanmugm?tab=repositories"
console.log(link.split("?"))//['https://github.com/SangeethaShanmugm', 'tab=repositories']

var a = "JavaScript"
console.log(a.split(""))//['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']


var b = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(b.toString())//J,a,v,a,S,c,r,i,p,t


console.log(b.toString().replaceAll(",", ""))//JavaScript