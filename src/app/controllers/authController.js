module.exports = (app) => {

    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');

    const User = require('../models/User');
    const authConfig = require('../../config/auth.json');

    let user = {}

    function generaterToken(params = {}) {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 86400
        });
    }

    user.save = async (req, res) => {
        const { email } = req.body;
        try {
            if (await User.findOne({ email })) {
                return res.status(400).send({ error: 'User already exists' })
            }
            const user = await User.create(req.body);
            user.password = undefined;
            return res.send({
                user,
                token: generaterToken({ id: user.id })
            });
        } catch (err) {
            return res.status(400).send({ error: 'Resgistrations failed' })
        }
    };

    app.post('/authenticate', async (req, res) => {

        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(400).send({ error: 'User not fount' })
        }

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).send({ error: 'Invalid password' });
        }

        user.password = undefined;

        res.send({
            user,
            token: generaterToken({ id: user.id })
        });
        
    })


};