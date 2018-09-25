'use strict';

module.exports = (app) => {

    let authorization = require('../middlewares/authMiddle');

    let controller = app.controllers.userController

    app.post("/users",  controller.save);
    app.get("/users",  controller.list);
    app.get("/users/:id",  controller.search);
    app.put("/users/:id",  controller.edit);
    app.delete("/users/:id",  controller.delete);
 
}