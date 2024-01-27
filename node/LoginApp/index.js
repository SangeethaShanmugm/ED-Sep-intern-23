const express = require('express');
const app = express();
var cors = require('cors')
const PORT = 8000
const db = require("./db")

app.use(express.json())
app.use(cors())

const AuthController = require("./controller/authController")



app.get("/", (req, res) => {
    res.send("Login App")
})

app.use("/auth", AuthController)


app.listen(PORT, () => console.log("The server listening on port", PORT))