// class => blueprint of object 

//create an class
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}



//create an object 
const person1 = new Person("peter", 20)
console.log(person1.name, person1.age) //peter

const person2 = new Person("Mack", 30)
console.log(person2.name, person2.age)