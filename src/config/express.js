const express = require('express');
const consign = require('consign');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port',3000)

// require('../app/controllers/authController')(app);
// require('../app/route/user')(app);
//require('../app/controllers/projectController')(app);

consign({cwd: 'app'})
  .include('models')
  .then('controllers')
  .then('route')
  .into(app)
;

module.exports = app;