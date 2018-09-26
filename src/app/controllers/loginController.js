'use strict';

module.exports = (app) => {

    const bcrypt = require('bcryptjs');

    const User = app.models.userModel;
    const authService = app.services.authService;

    this.login = async (req, res) => {
        let data = req.body;
        const { email, password } = data;
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(400).send({ error: 'User not fount' })
        }
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).send({ error: 'Invalid password' });
        }
        user.password = undefined;
        res.status(200).send({
            user,
            token: authService.generaterToken({ id: user.id })
        });
    };

    return this;

};
        