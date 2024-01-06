const express = require('express');
const app = express();
const PORT = 8000
const db = require("./db")
app.use(express.json())
const AuthController = require("./controller/authController")



app.get("/", (req, res) => {
    res.send("Login App")
})

app.use("/auth", AuthController)


app.listen(PORT, () => console.log("The server listening on port", PORT))