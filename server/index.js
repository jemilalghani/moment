const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");

// controllers
const bcryptController = require("./controllers/bcryptController");
const momentController = require("./controllers/momentController");
const bookingController = require("./controllers/bookingController");
const orderController = require("./controllers/orderController");
const hostController = require("./controllers/hostController");
const reviewController = require("./controllers/reviewController");
const emailController = require("./controllers/emailController");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(error => {
    console.log("error with massive", error);
  });

// PROFILES (USER) TABLE
app.post("/api/login", bcryptController.login); // COMPLETE
app.post("/api/register", bcryptController.register); // COMPLETE
app.post("/api/logout", bcryptController.logout);
app.get("/api/sessions", bcryptController.getSession);
// ADMIN POST FOR EXERIENCE DUMMY DATA
app.post("/api/moment/admin", momentController.addDummy); // FRONTEND READY
// EXPERIENCES (MOMENTS) TABLE
// app.post('/api/moment/create', momentController.addMoment);
//app.get('/api/moment/hostFind', momentController.findHost)
// app.get('/api/moment/:id', momentController.findId);
app.get("/api/moment/:highlight", momentController.findHighlight);
app.get("/api/moment/locale", momentController.findLocale);
app.get("/api/moment", momentController.findAll);
app.get("/api/moments/:id", momentController.getByID);
// ORDERS TABLE
// app.get('/api/order/hostFind')
// app.post('/api/order/userCreate')
// app.get('/api/order/userFind')
app.get("/api/order/:id", orderController.getOrders);
app.post("/api/orderCheckout", orderController.addToOrders);
// REVIEWS TABLE
// app.post('/api/review/create')
app.get("/api/reviews/:id", reviewController.getReviews);

app.get("/api/host/:id", hostController.getCreatorMoments);

///////////////////stripe//////////////////
app.post("/api/charge", bookingController.stripeCharge);

/////////////////email//////////////
app.post("/api/email", emailController.sendEmail);
app.post("/api/confirmation", emailController.sendConfirmation);

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => {
  console.log(`Tuning into Port ${SERVER_PORT} 📡`);
});
