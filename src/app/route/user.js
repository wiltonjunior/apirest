'use strict';

module.exports = (app) => {

    const router = app.Router(); 

    const user = require('../controllers/authController');
    router.post("/users", user.save)

}
