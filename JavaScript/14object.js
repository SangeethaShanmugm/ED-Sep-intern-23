var a = {}  //object 
var a = [] //array


var mname = "Avengers"
var type = "Action"
var rating = 4.5
var category = "Hollywood"

console.log(mname, category)//Avengers Hollywood


var mname1 = "Harry Potter"
var type1 = "Fantasy"
var rating1 = 5
var category1 = "Hollywood"

console.log(mname1, category1)

//object => {key : value}

var movie = {
    mname: "Avengers",
    type: "Action",
    rating: 4.5,
    category: "Hollywood",
}

//dot notation  => object.keyname
console.log(movie.mname)
console.log(movie.type)

//bracket notation => []

console.log(movie)//{mname: 'Avengers', type: 'Action', rating: 4.5, category: 'Hollywood'}
console.log(movie["mname"])//Avengers
console.log(movie["rating"])//4.5

for (key in movie) {
    console.log(key)
}

for (key in movie) {
    console.log(movie[key])
}

const students = {
    name: "John",
    age: 20,
    marks: {
        science: 60,
        math: 90,
    }
}

console.log(students)//{name: 'John', age: 20, marks: {…}}
console.log(students.marks)//{science: 60, math: 90}
console.log(students.marks.science)//60

//Array of objects
var movie = [
    {
        name: "The Avengers",
        rating: 5,
        type: "Action"
    },
    {
        name: "Harry Potter",
        rating: 6,
        type: "Action",
    },
    {
        name: "Frozen",
        rating: 9,
        type: "Fantasy"
    },
]

console.log(movie[0].name)