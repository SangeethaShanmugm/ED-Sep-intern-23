// Array is a collection of homogenious as well as heterogenous data types

//homogenious - same data types
let a = ["Hii", "Hello", "hii", "dugdugh", `Hey`]//Array of strings
let b = [1, 4, , 23, 78, 45.67] //Array of numbers
let c = [true, false, false, true]//Array fo Boolean

//heterogenous  - different data types

let d = ["Hii", 50, true, 43, "hey", "text"]

var e = [3, 5, 7, 9]    
console.log(typeof e) //object


var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]

//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]
//    0       1            2           3        4

city[0]//Delhi
city[3]//London

//push => add at the end of array


var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]
console.log(city) //['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']

console.log(city.push("Boston"))//6
console.log(city)// ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston']

city.push("Venice")
console.log(city)//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston','Venice']

//pop => remove last element in an array 

var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
console.log(city.pop())//Venice
console.log(city)//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston']

city.pop()//Boston
console.log(city)//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']

//unshift => add an element to start of array

var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

console.log(city.unshift("Dubai"))//8
console.log(city)//['Dubai','Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']


var train = ["🚃", "🚃", "🚃"]

console.log(train.unshift("🚂", "🔗"))//5
console.log(train)//["🚂", "🔗","🚃", "🚃", "🚃"]

//shift => remove element from start of an array 

console.log(train.shift())//🚂
console.log(train)//['🔗', '🚃', '🚃', '🚃']

var farm = ["🐷", "🐐", "🐴", "🐮", "🐔", "🐃"]

console.log(farm.shift())//["🐐", "🐴", "🐮", "🐔", "🐃"]
console.log(farm.shift())//["🐴", "🐮", "🐔", "🐃"]
console.log(farm.push("🐟"))
console.log(farm)//['🐴', '🐮', '🐔', '🐃', '🐟']


//slice => slice(startIndex, endIndex)


var farm = ["🐷", "🐐", "🐴", "🐮", "🐔", "🐃"]
//["🐷", "🐐", "🐴", "🐮", "🐔", "🐃"]
//   0      1     2      3     4     5
//  -6     -5    -4     -3    -2    -1

console.log(farm.slice(2, 5))//["🐴", "🐮", "🐔",]
console.log(farm.slice(-4, -1))//["🐴", "🐮", "🐔",]

//splice => splice(startIndex, DeleteCount, Values)


var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
//             0        1          2

console.log(city.splice(2, 2))//['Helsinki', 'London']
console.log(city)// ['Delhi', 'Mumbai', 'Amsterdam', 'Boston', 'Venice']

console.log(city.splice(3, 0))//
console.log(city)//['Delhi', 'Mumbai', 'Amsterdam', 'Boston', 'Venice']

console.log(city.splice(3, 0, "Pune", "Paris"))
//['Delhi', 'Mumbai', 'Amsterdam',"Pune", "Paris", 'Boston', 'Venice']
console.log(city)

console.log(city.splice(1, 1, "Innsburg", "France"))//['Mumbai']
console.log(city)//['Delhi', 'Innsburg', 'France', 'Amsterdam', 'Pune', 'Paris', 'Boston', 'Venice']


var student = ["Jack", "John"]

var name = "jack"

console.log(Array.isArray(student))//true
console.log(Array.isArray(name))//false

var city = ["Dubai", "Innsburg", "France", ["Red", [1, 2, 3], "Yellow", "Orange"], "London", "Pune"]
//                                                  0  1  2 
//                                            0        1          2          3  
//            0          1          2                           3                    4         5         

console.log(city[3])//["Red", [1, 2, 3], "Yellow", "Orange"]

console.log(city[3][1])//[ 1, 2, 3 ]