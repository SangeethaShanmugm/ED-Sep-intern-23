const express = require('express')
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
var cors = require('cors')

const PORT = 4000

const app = express()

app.use(cors())
app.use(express.json())//Inbuilt Middleware
const MONGO_URL = 'mongodb://127.0.0.1:27017';
// 'mongodb://localhost:27017';
let db;
//http => get, post, put, delete

// req => what you send to server
// res => what you receive from server

app.get('/', (req, res) => {
    res.send('Welcome to Restaurant App😀')
})

//get locations

app.get('/locations', (req, res) => {
    db.collection("locations").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

//get mealType

app.get('/quickSearch', (req, res) => {
    db.collection("mealType").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})


//get restaurant data 

app.get('/restaurants', (req, res) => {
    let query = {}
    let stateId = +req.query.state_id
    let mealId = +req.query.mealId
    if (stateId) {
        query = { state_id: stateId }
    }
    else if (mealId) {
        query = { "mealTypes.mealtype_id": mealId }
    }

    db.collection("restaurants").find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

//filter 


app.get('/filter/:mealId', (req, res) => {
    let query = {}
    let mealId = +req.params.mealId
    let cuisineId = +req.query.cuisineId
    let lcost = +req.query.lcost
    let hcost = +req.query.hcost
    let sort = { cost: 1 }//asc

    if (req.query.sort) {
        sort = { cost: req.query.sort }
    }

    if (cuisineId) {
        query = {
            "mealTypes.mealtype_id": mealId,
            "cuisines.cuisine_id": cuisineId
        }
    } else if (lcost && hcost) {
        query = {
            "mealTypes.mealtype_id": mealId,
            $and: [{ cost: { $gt: lcost, $lt: hcost } }]
        }
    } else if (cuisineId && lcost && hcost) {
        query = {
            "mealTypes.mealtype_id": mealId,
            "cuisines.cuisine_id": cuisineId,
            $and: [{ cost: { $gt: lcost, $lt: hcost } }]
        }
    }

    // -1 => desc
    // 1 => asc

    db.collection("restaurants").find(query).sort(sort).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

//details

app.get('/details/:id', (req, res) => {
    let id = +req.params.id

    db.collection("restaurants").find({ restaurant_id: id }).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

//menu of restaurant

app.get('/menu/:id', (req, res) => {
    let id = +req.params.id

    db.collection("menu").find({ restaurant_id: id }).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

//Menu Details

// express.json() => Inbuilt middleware
app.post('/menuItem', (req, res) => {
    if (Array.isArray(req.body)) {
        db.collection("menu").find({ menu_id: { $in: req.body } })
            .toArray((err, result) => {
                if (err) throw err;
                res.send(result)
            })
    } else {
        res.send("Invalid Input")
    }
})


//placeorder
app.post('/placeOrder', (req, res) => {
    console.log(req.body)

    db.collection("orders").insertOne(req.body, (err, result) => {
        if (err) throw err;
        res.send("Order Placed")
    })
})

//getOrders

app.get('/orders', (req, res) => {
    let query = {}
    let email = req.query.email
    if (email) {
        query = { email }
    }
    db.collection("orders").find(query).toArray((err, result) => {
        res.send(result)
    })
})


//delete order

app.delete('/deleteOrder/:id', (req, res) => {
    let oid = +req.params.id
    db.collection("orders").deleteOne({ orderId: oid }, (err, result) => {
        if (err) throw err;
        res.send("Order deleted successfully")
    })
})

//update payment details


app.put('/updateOrder/:id', (req, res) => {
    let oid = +req.params.id
    db.collection("orders").updateOne({ orderId: oid },
        {
            $set: {
                status: req.body.status,
                bank_name: req.body.bank_name,
                date: req.body.date,
            }
        },
        (err, result) => {
            if (err) throw err;
            res.send("Order updated successfully")
        })
})






//Mongo connection 

MongoClient.connect(MONGO_URL, (err, client) => {
    console.log("MongoDB is connected")
    if (err) console.log("Error while connecting to Mongo")
    db = client.db("ed-sep-intern")
    app.listen(PORT, () => console.log("Server connected on the PORT", PORT))
})