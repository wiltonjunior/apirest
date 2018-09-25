'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/adely', { useCreateIndex: true, useNewUrlParser: true } );
mongoose.Promise = global.Promise;

module.exports = mongoose;

