// closure => own scope + lexical scope

var price = 1000

function getPrice() {
    console.log("The old Price is", price)
    // var price = 500
    console.log("The new Price is", price)
}
getPrice()

// hoisting
// lexical scope

// 🧑‍🦳  => grandfather  💰            =>   🏡


// 🧑‍  => father     💰 + 💰         =>   🚘(own scope) +  🏡(lexical scope)  => father's closure


// 🧑  => son      💰 + 💰 + 💰      =>   💻 (own scope) + 🚘(lexical scope) => son's closure


function outer() {
    var a = 20
    function inner() {
        console.log(a)
    }
    return inner
}
outer()()
// var close = outer()
// close()


function createPerson(name) {
    let age = 0

    return {
        getName: function () {
            return name;
        },
        getAge: function () {
            return age;
        },
        increaseAge: function () {
            age++
        }
    }
}

let person = createPerson("John")

console.log(person.getName())
console.log(person.getAge())

person.increaseAge()

console.log(person.getAge())


function createCounter() {
    let count = 0;

    function increment() {
        count++
        console.log(count)
    }
    return increment
}
createCounter()()
// let counter = createCounter()
// counter()