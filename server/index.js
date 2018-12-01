const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');

// controllers 
const bcryptController = require('./controllers/bcryptController');

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

app.post('/api/login', bcryptController.login);
app.post('/api/register', bcryptController.register);
app.post('/api/logout', bcryptController.logout);

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, ()=>{
    console.log(`Tuning into Port ${SERVER_PORT} 📡`)
})