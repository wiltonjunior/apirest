'use strict';

module.exports = (app) => {

const bcryty = require('bcryptjs');
const mongoose = require('../../database/db');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

UserSchema.pre('save', async function(next){
    const hash = await bcryty.hash(this.password, 10);
    this.password = hash;
    next()
})

return  mongoose.model('User', UserSchema);

}
