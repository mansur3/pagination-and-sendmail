const mongoose = require("mongoose");

const connect = async (req, res) => {
    return mongoose.connect("mongodb://127.0.0.1:27017/user")
}


module.exports = connect;