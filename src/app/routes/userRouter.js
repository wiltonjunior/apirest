'use strict';

module.exports = (app) => {

    let authorization = require('../middlewares/authMiddle');

    let controller = app.controllers.userController

    app.post("/users", authorization, controller.save);
    app.get("/users", authorization, controller.list);
    app.get("/users/:id", authorization, controller.search);
    app.put("/users/:id", authorization, controller.edit);
    app.delete("/users/:id", authorization, controller.delete);
 
}