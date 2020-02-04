// pasta models é a entidade que será armazenada no banco

const mongoose = require('mongoose'); // importando o MongoDB
const PointSchema = require('./utils/PointSchema'); // pegando o pointschema para fazer a geolocalização

const DevSchema = new mongoose.Schema({
    name : String,
    github_username : String,
    bio : String,
    avatar_url : String,
    techs : [String], // criando um vetor de Strings
    location : {
        type: PointSchema,
        index: '2dsphere' // criando o index da geolocalização para facilitar na busca
    }
});

module.exports = mongoose.model('Dev' , DevSchema); // Exportando o model, 1 parametro o nome do model e o segundo o Schema criado