
module.exports = (app) => {

    // const router = app.Router(); 

    let user = app.controllers.authController;
console.log(user.save)
    app.post('/cara', user.save)

}

