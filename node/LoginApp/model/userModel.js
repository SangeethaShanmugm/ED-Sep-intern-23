const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        phone: Number,
        role: String
    }
)

let users = mongoose.model("users", userSchema)

module.exports = users