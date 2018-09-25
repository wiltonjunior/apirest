'use strict';

const express = require("express");
const consign = require("consign");
var cors = require("cors");

var app = express();

app.set('port',3001);

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

consign({'cwd':'src/app','verbose':true}).include('models').then('services').then('controllers').then('routes').into(app)
 
module.exports = app; 