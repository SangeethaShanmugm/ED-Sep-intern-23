// for , while, do while, for of, for in (objects)

//it helps us to iterate over the array as well as print the series

// for (variable, condition, increment / decrement)


for (let i = 0; i < 5; i++) {
    console.log(i)
}


var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

for (let i = 0; i < city.length; i++) {
    console.log(city[i])
}

for (let i = 0; i < city.length; i++) {
    console.log(`<p>${city[i]}</p>`)
}


var city = ["Dubai", "Innsburg", "France", ["Red", [1, 2, 3], "Yellow", "Orange"], "London", "Pune"]

// for (let i = 0; i < city.length; i++) {
//     if (Array.isArray(city[i])) {
//         for (let j = 0; j < city[i].length; j++) {
//             console.log(city[i][j])
//         }
//     } else {
//         console.log(city[i])
//     }

// }


// for (let i = 0; i < city.length; i++) {
//     if (Array.isArray(city[i])) {
//         for (let j = 0; j < city[i].length; j++) {
//             console.log(city[i][j])
//             // if (Array.isArray(city[j])) {
//             //     for (let k = 0; k < city[j].length; k++) {
//             //         console.log(city[j][k])
//             //     }
//             // }
//         }
//     } else {
//         console.log(city[i])
//     }

// }

var i = 0
while (i < 5) {
    console.log(i)
    i++;
}


var i = 0
do {
    console.log(i)
    i++
} while (i < 5)


//for of loop

var city = ["Dubai", "Innsburg", "France", "London", "Pune"]

for (mycity of city) {
    console.log(mycity)
}


var city = ["Dubai", "Innsburg", "France", ["Red", "Yellow", "Orange"], "London", "Pune"]


for (mycity of city) {
    if (Array.isArray(mycity)) {
        for (mycolor of mycity) {
            console.log(mycolor)
        }
    } else {
        console.log(mycity)
    }

}


//forEach

var colors = ["Red", "Yellow", "Orange"]
colors.forEach(myfunction)

function myfunction(item) {
    console.log(item)
    return item
}

var city = ["Dubai", "Innsburg", "France", ["Red", "Yellow", "Orange"], "London", "Pune"]


for (let i = 0; i < city.length; i++) {
    if (Array.isArray(city[i])) {
        let arrCity = city[i]
        for (let j = 0; j < arrCity.length; j++) {
            if (Array.isArray(arrCity[j])) {
                for (let k = 0; k < arrCity[j][k]; k++) {
                    console.log(arrCity[j][k])
                }

            }
            else {
                console.log(city[i][j])
            }
        }

    }
    else {
        console.log(`<p>${city[i]}</p>`)
    }
}