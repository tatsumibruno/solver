const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

mongoose.connect('mongodb://localhost:27017/solver', { useNewUrlParser: true });

module.exports = app