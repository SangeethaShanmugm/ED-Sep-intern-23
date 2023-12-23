## Page 1

List of city /locations (GET)

http://localhost:4000/locations

List of QuickSearch / MealTypes (GET)

http://localhost:4000/quickSearch

List of restaurant (GET)

http://localhost:4000/restaurants

restaurants wrt city (GET)

http://localhost:4000/restaurants?state_id=1

## Page 2

restaurants wrt mealType (GET)

http://localhost:4000/restaurants?mealId=1

restaurants wrt cuisineId and mealId (GET)

http://localhost:4000/filter/5?cuisineId=3

restaurants wrt cost and mealId (GET)

http://localhost:4000/filter/1?lcost=500&hcost=1000

restaurants wrt cuisineId and cost (GET)

http://localhost:4000/filter/2?cuisineId=1&lcost=500&hcost=900

sort in basis of cost (GET)

http://localhost:4000/filter/1?lcost=200&hcost=500&sort=-1

# Page 3

Details of restaurant (GET)

http://localhost:4000/details/1

Menu of restaurant (GET)

http://localhost:4000/menu/2

http methods meaning
GET -> READ
POST -> ADDING/INSERT
PUT -> UPDATE
DELETE -> DELETE

crud - create, read, update, delete

# Page 4

Menu Details (POST)

http://localhost:4000/menuItem

input => [1,2,3]

PlaceOrder (POST)

{

        "orderId": 1,
        "name": "peter",
        "email": "peter@gmail.com",
        "address": "Home 5",
        "phone": 7435434155,
        "cost": 577,
        "restName": "Domino's Pizza",
        "menuItem": [1,2,3]
    }

## Page 5

List of orders

http://localhost:4000/orders

order wrt email

http://localhost:4000/orders?email=peter@gmail.com

delete order wrt id

http://localhost:4000/deleteOrder/1

update payment details (PUT)

{
"status":"Delivered",
"bank_name":"HDFC",
"date":"12-23-23"
}
