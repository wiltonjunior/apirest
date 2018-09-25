module.exports = (app) => {

    const jwt = require('jsonwebtoken');

    const authConfig = require('../../config/auth.json');

    this.generaterToken = function(params = {}) {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 86400
        });
    } 

    return this;

};
        