const nodemailer = require("nodemailer");

module.exports = {
  sendEmail: (req, res) => {
    console.log("email is here or not", req.body);
    const { email } = req.body;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.X,
        pass: process.env.Y
      }
    });

    const mailOptions = {
      from: process.env.X, // sender address
      to: email, // list of receivers
      subject: "EMAIL HAS BEEN VERIFIED", // Subject line
      html: "<p>LETS GO</p>" // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  },

  sendConfirmation: (req, res) => {
    console.log("INSIDE NODEMAILER", req.body.body);
    console.log("INSIDE NODEMAILER", req.body.moment);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.X,
        pass: process.env.Y
      }
    });

    const mailOptions = {
      from: process.env.X, // sender address
      to: req.body.body.email, // list of receivers
      subject: "LETS GOOOOOOOOOOOOOOOOOOOOO", // Subject line
      html: "<p>You've purchased an experience</p>" // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }
};
