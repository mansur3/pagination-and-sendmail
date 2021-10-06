const express = require("express");
const router = express.Router();

const User = require("../models/users.model");
const transport = require("../configs/mail")


router.post("/", async(req, res) => {
    const {first_name, last_name, email} = req.body;

    const user = await User.create(req.body);

    const messageUser = {
        from : "ownner@gmail.com",
        to : email,
        subject : "Welcome to ABC system" + first_name + "  " +  last_name + " ;",
        text : "Hi" + first_name + ", Please confirm your email address"
    }
    const admin = {
        from : email,
        to : "adminone@gmail.com",
        subject : "" + first_name + " " + last_name + "has registered with us",
        text: "Please welcome " + first_name + " " + last_name
    }
    const admin2 = {
        from : email,
        to : "admintwo@gmail.com",
        subject : "" + first_name + " " + last_name + "has registered with us",
        text: "Please welcome " + first_name + " " + last_name
    }
    const admin3 = {
        from : email,
        to : "three@gmail.com",
        subject : "" + first_name + " " + last_name + "has registered with us",
        text: "Please welcome " + first_name + " " + last_name
    }
    const admin4 = {
        from : email,
        to : "adminfour@gmail.com",
        subject : "" + first_name + " " + last_name + "has registered with us",
        text: "Please welcome " + first_name + " " + last_name
    }
    const admin5 = {
        from : email,
        to : "adminfive@gmail.com",
        subject : "" + first_name + " " + last_name + "has registered with us",
        text: "Please welcome " + first_name + " " + last_name
    }


    transport.sendMail(messageUser);
    transport.sendMail(admin);
    transport.sendMail(admin2);
    transport.sendMail(admin3);
    transport.sendMail(admin4);
    transport.sendMail(admin5);



    res.status(201).send({user});
})


router.get("/", async (req, res) => {
    let size = +req.query.size;
    let page = +req.query.page;
    let offset = (page - 1) * size;

    const user = await User.find({}).skip(offset).limit(size).lean().exec();

    const totalUser = await User.find({}).countDocuments().lean().exec();
    let totalPage = Math.ceil(totalUser/size);
    console.log(totalPage);


    res.status(200).send({user, totalPage})
})


module.exports = router;