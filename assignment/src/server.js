const express = require("express");
const app = express();
const connect = require("./configs/db");
app.use(express.json());

const userSchema = require("./controllers/users.controller");

app.use("/users", userSchema);

app.listen(3000, async(req, res) => {
    await connect();

    console.log("listening on port 3000");
})