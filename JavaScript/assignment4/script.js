var ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
]

console.log(ratingData)


//distinct restaurant

let distinct = []
for (let i = 0; i < ratingData.length; i++) {
    console.log(ratingData[i])
    if (distinct.indexOf(ratingData[i].restaurant) === -1) {
        distinct.push(ratingData[i].restaurant)
    }
}
console.log(distinct)

//avg for all restaurant

let uniqueRest = ['KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut']

let avgRating = []
let outRating = 0
let count = 0

for (let i = 0; i < uniqueRest.length; i++) {
    // console.log(uniqueRest[i])
    for (let j = 0; j < ratingData.length; j++) {
        // console.log(ratingData[j].restaurant)
        if (uniqueRest[i] == ratingData[j].restaurant) {
            outRating += ratingData[j].rating
            count = count + 1
        }
        // console.log(ratingData[j].restaurant)
        // console.log(ratingData[j].rating)
    }
    var output = outRating / count
    console.log(output)
    let myObj = {}
    myObj.restaurant = uniqueRest[i]
    myObj.avgRating = output
    avgRating.push(myObj)

}
console.log("outRating", outRating, "Count", count)
console.log(avgRating)


// {restaurant: 'KFC', avgRating: 4}
// {restaurant: 'Burger King', avgRating: 4}
// {restaurant: 'Domino', avgRating: 3}
// {restaurant: 'Subway', avgRating: 3.142857142857143}
// {restaurant: 'Pizza Hut', avgRating: 3.375}
