// CRUD;
//            http methods     CRUD methods
// C - Create  -> post         insertOne, insertMany
// R -> Read   -> get          find, findOne
// U -> Update  -> put         updateOne, updateMany
// D -> Delete -> delete       deleteOne, deleteMany


// Database => store data in some format relational db and non-relational db
//relational db => table => rows and columns  => sql, mysql, postgres
//non- relational db => no structure => mongodb, cassandra, couch db

// mongodb  => document {} => object
// store => BSON => binary JSON
// retrieve  => JSON

// https://www.mongodb.com/try/download/community => mongo installation

// mongo --version => check version of mongodb

// database => collections(table) => No. of document

// show dbs => list all dbs
//use dbName => create and switch to db
//show collections => list all collections
//db => current db 

db.locations.insertMany([
    {
        "location_id": 1,
        "location_name": "Ashok Vihar Phase 3, New Delhi",
        "state_id": 1,
        "state": "Delhi",
        "country_name": "India"
    },
    {
        "location_id": 4,
        "location_name": "Bibvewadi, Pune",
        "state_id": 2,
        "state": "Maharashtra",
        "country_name": "India"
    },
    {
        "location_id": 8,
        "location_name": "Jeevan Bhima Nagar, Bangalore",
        "state_id": 3,
        "state": "Karnataka",
        "country_name": "India"
    },
    {
        "location_id": 13,
        "location_name": "Sector 40, Chandigarh",
        "state_id": 4,
        "state": "Punjab",
        "country_name": "India"
    }
])


db.locations.find().pretty()