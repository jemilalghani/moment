const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');

// controllers 
const bcryptController = require('./controllers/bcryptController');
const momentController = require('./controllers/momentController');
const bookingController = require('./controllers/bookingController');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

massive(process.env.CONNECTION_STRING).then(database=>{
    app.set('db', database)
}).catch(error=>{
    console.log('error with massive', error)
})

// PROFILES (USER) TABLE
app.post('/api/login', bcryptController.login); // COMPLETE
app.post('/api/register', bcryptController.register); // COMPLETE
app.post('/api/logout', bcryptController.logout);
// ADMIN POST FOR EXERIENCE DUMMY DATA
app.post('/api/moment/admin', momentController.addDummy); // FRONTEND READY
// EXPERIENCES (MOMENTS) TABLE
// app.post('/api/moment/create', momentController.addMoment);
// app.get('/api/moment/hostFind', momentController.findByHost)
// app.get('/api/moment/:id', momentController.findId);
app.get('/api/moment/:highlight', momentController.findHighlight);
app.get('/api/moment/locale', momentController.findLocale);
// ORDERS TABLE
// app.get('/api/order/hostFind')
// app.post('/api/order/userCreate')
// app.get('/api/order/userFind')
// REVIEWS TABLE
// app.post('/api/review/create')
// app.get('/api/review/find')



///////////////////stripe//////////////////
app.post('/api/charge', bookingController.stripeCharge);


const SERVER_PORT = 4000;
app.listen(SERVER_PORT, ()=>{
    console.log(`Tuning into Port ${SERVER_PORT} 📡`)
})