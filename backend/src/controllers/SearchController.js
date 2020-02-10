// criando controller para fazer busca pelo app, lembrar de criar apenas um index por controller

const User = require('../models/Users');
const parseStringAsArray = require ('../utils/parseStringAsArray')

module.exports = {
    async index(request,response){
        //buscar todos Devs num raio de 10km
        // filtrar por techs
        const { latitude , longitude , mainRole, secRols } = request.query;

        const techsArray = parseStringAsArray(techs);

        // fazer filtro para encontrar devs
        const users = await User.find({
            roles: {
                $in: techsArray, // retornar apenas os devs que tem aquela tecnologia o $in é para verificar se tem as techs ou não (operators do mongo)
            },
            location : {
                $near : { // near para encontrar proximo de algo
                    $geometry: {  // passar o ponto nesse parametro,         
                        type : 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance : 10000, // distancia maxima da busca, em metros
                },
            }
        });

        return response.json ({ devs});
    }
};