'use strict';

module.exports = (app) => {

    let controller = app.controllers.loginController

    app.post("/login", controller.login); 
 
}