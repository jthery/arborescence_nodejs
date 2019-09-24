const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const app = express();

// connexion à la bdd
require('dotenv').config();
const models = require('./src/models');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS
app.use(cors());

// check connexion with postman
app.get('/', (req, res) =>
  res.status(200).send({ message: 'Welcome on API test!' })
);

// get all roads
require('./src/modules/router.module')(app);

//Sync Database
models.sequelize.sync().then(function() {
    console.log('BDD OK !');
}).catch(function(err) {
    console.log(err, 'Y\'a une couille dans l`\'updtate !');
});

module.exports = app;
