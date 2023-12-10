const express = require('express')
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const PORT = 4000

const app = express()
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
//get restaurant data 

app.get('/restaurants', (req, res) => {
    db.collection("restaurants").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})





//Mongo connection 

MongoClient.connect(MONGO_URL, (err, client) => {
    console.log("MongoDB is connected")
    if (err) console.log("Error while connecting to Mongo")
    db = client.db("ed-sep-intern")
    app.listen(PORT, () => console.log("Server connected on the PORT", PORT))
})