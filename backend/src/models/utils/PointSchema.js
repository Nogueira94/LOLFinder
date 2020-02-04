// criando para reaproveitar as opções de geolocalização, pois são grandes

const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: { // criando uma coluna
        type : String, // do tipo string
        enum: ['Point'], // e ela precisa ser um point, como não pode definir que o valor dela é um point, sempre passar assim
        required: true,
    },
    coordinates: {
        type:[Number],
        required: true,
    },
});

module.exports = PointSchema;