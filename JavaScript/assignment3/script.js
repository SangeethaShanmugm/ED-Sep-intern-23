class restaurantManager {
    // part-1

    restaurantList = [
        {
            id: 1,
            restaurantName: "KFC",
            address: "Anand Vihar",
            city: "Delhi"
        },
        {
            id: 2,
            restaurantName: "Dominos",
            address: "Savita Vihar",
            city: "Delhi"
        },
        {
            id: 3,
            restaurantName: "Burger King",
            address: "Civil Lines",
            city: "Pune"
        },
        {
            id: 4,
            restaurantName: "Subway",
            address: "Cantonment",
            city: "Mumbai"
        }
    ]


    printAllRestaurantNames = () => {
        return this.restaurantList.map((data) => {
            console.log("data", data.restaurantName)
            return data.restaurantName
        })
    }

    filterRestaurantByCity = (cityName) => {
        return this.restaurantList.filter((data) => {
            console.log("data", data.city)
            return data.city == cityName
        })
    }



}

//create an object
let restObj = new restaurantManager()
console.log(restObj.restaurantList)

console.log(restObj.printAllRestaurantNames())//['KFC', 'Dominos', 'Burger King', 'Subway']
console.log(restObj.filterRestaurantByCity("Mumbai"))
console.log(restObj.filterRestaurantByCity("Delhi"))


var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

let out = 0;

for (key in orderData) {
    console.log(orderData[key])
    out += orderData[key]
    // out = out + orderData[key]
}
console.log(out)

function getProportion(orderData) {
    let total = 0

    for (key in orderData) {
        total += orderData[key]

    }

    //calculate percent
    let output = []
    let count = 0
    for (key in orderData) {
        let percentValue = ((orderData[key] / total) * 100).toFixed(2)
        count = count + 1
        console.log(percentValue, count)
        let myObj = {}
        myObj.id = count
        myObj.order = key
        myObj.order_percentage = `${percentValue}`
        myObj.restaurant = "Punjabi Tadka"
        output.push(myObj)
    }
    return output


}
console.log(getProportion(orderData))



// {id: 1, order: 'Below 500', order_percentage: '10.05', restaurant: 'Punjabi Tadka'}

// {id: 2, order: '500-1000', order_percentage: '14.57', restaurant: 'Punjabi Tadka'}

// {id: 3, order: '1000-1500', order_percentage: '15.08', restaurant: 'Punjabi Tadka'}

// {id: 4, order: '1500-2000', order_percentage: '22.11', restaurant: 'Punjabi Tadka'}
 
// {id: 5, order: 'Above 2000', order_percentage: '38.19', restaurant: 'Punjabi Tadka'}


