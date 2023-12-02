// console.log("first")
// console.log("Second")
// console.log("third")




// synchronous => cook => 🥚(5 mins) => 🍞(3 mins) => ☕(2 mins) => single thread(job)

// smart cook => asynchrounously => multiple thread

// 🥚(5 mins) =>
// 🍞(3 mins) =>
// ☕(2 mins) 


// console.log("first")

// setTimeout(() => {
//     console.log("second")
// }, 3000)

// console.log("third")


// setTimeout(() => {
//     console.log("Happy Day")
//     setTimeout(() => {
//         console.log(1)
//         setTimeout(() => {
//             console.log(2)
//             setTimeout(() => {
//                 console.log(3)
//                 setTimeout(() => {
//                     console.log(4)
//                     setTimeout(() => {
//                         console.log(5)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// Promise
// -----------

// promise => object => represent eventual completion or failure of an asynchronous operation.
// pending => initial state
// fulfilled => operation is successfully
// rejected => operation failed

// const myPromise = new Promise((resolve, reject) => {
//     const success = false

//     if (success) {
//         resolve("Operation Successful")
//     } else {
//         reject("Operation Failed")
//     }
// })
// console.log(myPromise)

//handle multiple asynchronous operations

let countValue = new Promise((resolve, reject) => {
    // resolve("Promise resolved")
    reject("promise rejected")
})

countValue
    .then(function successValue(result) {
        console.log(result)
    })
    .then(function successValue1() {
        console.log("You can call multiple function like this")
    })
    .then(function successValue2() {
        console.log("Example then")
    })
    .catch(function errorValue(result) {
        console.log(result)
    })


function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: { name: "John", age: 20 },
                2: { name: "Peter", age: 25 },
                3: { name: "Mick", age: 30 },
            }
            console.log(users)
            const user = users[userId]
            console.log(user)//{name: 'John', age: 20}
            if (user) {
                resolve(user)
            } else {
                reject("user not found")
            }
        }, 1000)
    })
}

//promise chaining
fetchUserData(1)
    .then((user) => {
        console.log("User data", user.name, user.age)
        return user.age * 2
    })
    .then((updatedAge) => {
        console.log("updatedAge", updatedAge)
    })

    .catch((error) => {
        console.log("Error", error)
    })