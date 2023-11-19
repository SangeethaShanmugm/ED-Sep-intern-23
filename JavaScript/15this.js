// this => access property/key of an object 

let firstName = "Abhay"
let lastName = "Pratap"


let sayHi = {
    firstName: "Aditya",
    lastName: "Kommana",
    greet: function () {
        return `Say hi to ${this.firstName} ${this.lastName}`
        // return `Say hi to ${firstName} ${lastName}`
    }
}


console.log(sayHi.firstName)//Aditya

console.log(firstName)//Abhay
console.log(sayHi.greet())//Say hi to Abhay Pratap