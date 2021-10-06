const nodemailer = require("nodemailer");
require("dotenv").config();

var transport = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });
module.exports = transport;