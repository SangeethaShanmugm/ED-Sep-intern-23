// callback => a func inside another func

function welcome(name, callback) {
    console.log(`Hi ${name}`)
    callback()
}

//callback function 

function callMe() {
    console.log("I am callback function")
}

// welcome("jack", callMe)


function greet(name, myFunction) {
    console.log("Hello")
    myFunction(name)
}
//callback func
function sayName(name) {
    console.log(`Hello ${name}`)
}

// greet("jack", sayName)

//delay
// setTimeout(greet, 3000, "Jack", sayName)



setTimeout(() => {
    console.log("Hey")
}, 3000)

console.log("Hello1")
console.log("Hello2")
console.log("Hello3")
console.log("Hello4")
console.log("Hello1")
console.log("Hello2")
console.log("Hello3")
console.log("Hello4")



setInterval(() => {
    let date = new Date()
    console.log(date)
}, 3000)


const carts = ["shoes", "pants", "kurta", "phone"]

api.createOrder(cart, function () {
    api.proceedPayment(function () {
        api.makePayment(function () {
            api.showOrderSummary(function () {

            })
        })
    })
})

//chefA can take cake and serve to customer
chefA(instructions, function () {
    //chefA will provide instruction
    chefB(followinstruction, function () {
        console.log("Cake is done")
    })
})

//callback => pyramid of doom => callback hell
//disadv => difficult maintain, more error
//solve this callback hell => promise