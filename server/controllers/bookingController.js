require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPES);

module.exports = {
  stripeCharge: (req, res) => {
    const stripeToken = req.body.body;
    // console.log('STRIPE REQ.BODY----------------------------',req.body)
    stripe.charges.create(
      {
        amount: req.body.amount,
        currency: "usd",
        description: "Example charge",
        source: stripeToken.id
      },
      function(err, charge) {
        // console.log('charge--------------------------------------', charge)
        if (err) {
          res.send({
            success: false,
            message: "error"
          });
        } else {
          res.send({
            success: true,
            message: "success"
          });
        }
      }
    );
  }
};
