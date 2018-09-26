'use strict';

module.exports = (app) => {

    const bcrypt = require('bcryptjs');

    const User = app.models.userModel;
    const authService = app.services.authService;


    this.save = async (req, res) => {

        let data = req.body

        const { email } = data;
        try {
            if (await User.findOne({ email })) {
                return res.status(400).send({ error: 'User already exists'})
            }
            const user = await User.create(data);
            user.password = undefined;
            return res.status(200).send({
                user,
                token: authService.generaterToken({ id: user.id })
            });    
        } catch (err) {
            console.log(err)
            return res.status(400).send({ error: 'Resgistrations failed'})
        }
    };

    this.list = async(req, res) => {

        try {
            await User.find( (err, data) => {
                if(err){
                    return res.status(500).send({error: err})
                }
                res.status(200).send(data)
            });   
        } catch (err) {
            res.status(500).send({
                error: 'Error loading user'
            });
        }

    }

    this.search = async (req, res) => {

        try{
            await User.findById(req.params.id, (err, data) => {
                if(err){
                    return res.status(500).send({error: err})
                }
                res.status(200).send(data)
            });  
        }catch(err) {
            return res.status(400).send({error: 'Error loading user'})
        }

    }

    this.edit = async (req, res) => {

        try {

            let user = await User.findByIdAndUpdate(req.params.id, req.body); 
            
            res.status(200).send(user);
            
        } catch(err) {
            return res.status(400).send({error: 'Error updating user'})
        }

    }

    this.delete = async (req, res) => {

        try{
            await User.findByIdAndRemove(req.params.id, (err, data) => {
                if(err){
                    return res.status(500).send({error: err})
                }
                res.status(200).send(data)
            });   
        }catch(err) {
            return res.status(400).send({error: 'Error deleting user'})
        }
        
    }

    return this;

};
        