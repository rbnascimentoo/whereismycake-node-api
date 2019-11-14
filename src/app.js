// App
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const router = express.Router();
const cors = require('cors');

// Load models
const Participante = require('./models/participante');
const Sorteio = require('./models/sorteio');

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
const participanteRoute = require('./routes/participanteRoute');
const sorteioRoute = require('./routes/sorteioRoute');
app.use('/', index);
app.use('/api/whereismycake/participante', participanteRoute);
app.use('/api/whereismycake/sorteio', sorteioRoute);

module.exports = app;