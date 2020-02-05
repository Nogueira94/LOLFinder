// pasta models é a entidade que será armazenada no banco

const mongoose = require('mongoose'); 
const PointSchema = require('./utils/PointSchema');

const UserSchema = new mongoose.Schema({
    name : String,
    profileIconId : String,
    summonerLevel : String,
    id : String,
    accountId : String,
    wins : String,
    losses : String,
    rank : String,
    tier : String,
    location : {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('User' , UserSchema); 