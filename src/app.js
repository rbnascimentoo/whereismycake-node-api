// App
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');

// Load models
const Participante = require('./models/participant');
const Raffle = require('./models/raffle');
const Cake = require('./models/cake');

//db
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true
});

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:4200'
  }));

  app.options('*', cors());

// routes
const index = require('./routes/index');
const participantRoute = require('./routes/participantRoute');
const raffleRoute = require('./routes/raffleRoute');
const cakeRoute = require('./routes/cakeRoute');
app.use('/', index);
app.use('/api/whereismycake/participant', participantRoute);
app.use('/api/whereismycake/raffle', raffleRoute);
app.use('/api/whereismycake/cake', cakeRoute);

module.exports = app;