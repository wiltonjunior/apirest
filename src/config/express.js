const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port',3001)

app.get('/', (req, res) => {
    res.send({ok: true});
})

require('../app/controllers/authController')(app);
require('../app/route/user')(app);
//require('../app/controllers/projectController')(app);

module.exports = app;