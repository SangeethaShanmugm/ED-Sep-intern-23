//Map
// used to iterate over the array
// It always return the same length of output array as input array
// it is basically used to apply logics(add, sub, mul, div)

var a = [3, 5, 7, 8, 23, 56, 90]

var b = a.map(data => {
    return data * 2
})

console.log(b)//[6, 10, 14, 16, 46, 112, 180]

var a = [3, 5, 7, 8, 23, 56, 90]

var b = a.map(data => {
    return `<p>${data}</p>`
})

console.log(b)

// ['<p>3</p>', '<p>5</p>', '<p>7</p>', '<p>8</p>', '<p>23</p>', '<p>56</p>', '<p>90</p>']



// filter
//it is used to filter out value 
//it may or may not return the same length of output array as input array
//only return those data which output or condition is true


var a = [3, 5, 7, 8, 23, 56, 90, "123"]

var b = a.filter(data => {
    return data > 20
})

console.log(b)

var a = ["Hello", "hi", "hey"]

var b = a.filter(data => {
    return data == "hello"
})

console.log(b)


var arr = [5, 1, 6, 8, 3]

var output = arr.filter((item) => {
    return item % 2
})

console.log(output) //[5, 1, 3]


var res = arr.filter(isOdd)

function isOdd(x) {
    return x % 2
}
console.log(res)//[5, 1, 3]
