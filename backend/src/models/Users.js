const mongoose = require('mongoose'); 
const PointSchema = require('./utils/PointSchema');

var UserSchema = new mongoose.Schema({
    name : String,
    profileIconId : String,
    summonerLevel : String,
    id : String,
    wins : Number,
    losses : Number,
    rank : String,
    tier : String,
    mainRole: String,
    secRole: String,
    location : {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('User' , UserSchema); 