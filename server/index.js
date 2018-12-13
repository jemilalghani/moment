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
    saveUninitialized: false,
    maxAge: 1000 * 60 * 60 * 24 * 14
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
app.get("/api/delete/:id/:hostid", momentController.delete);
app.post("/api/filtermoment", momentController.filter);
// ORDERS TABLE
// app.get('/api/order/hostFind')
// app.post('/api/order/userCreate')
// app.get('/api/order/userFind')
app.get("/api/availabledates/:id", momentController.getAvailDates);
app.get("/api/order/:id", orderController.getOrders);
app.post("/api/orderCheckout", orderController.addToOrders);
// REVIEWS TABLE
app.post("/api/review/add", reviewController.addReview);
app.get("/api/reviews/:id", reviewController.getReviews);

app.get("/api/host/:id", hostController.getCreatorMoments);

///////////////////stripe//////////////////
app.post("/api/charge", bookingController.stripeCharge);

/////////////////email//////////////
app.post("/api/email", emailController.sendEmail);
app.post("/api/confirmation", emailController.sendConfirmation);
app.use(express.static(`${__dirname}/../build`));

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => {
  console.log(`Tuning into Port ${SERVER_PORT} 📡`);
});
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
