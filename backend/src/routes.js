const { Router } = require('express'); // para importar apenas alguma parte de dentro, utilizar chaves.
//const DevController = require('./controllers/DevController'); // importando os dados do DevController para utilizar no post
//const SearchController = require('./controllers/SearchController'); // importando os dados do DevController para utilizar no post
const routes = Router();
const axios = require('axios');

routes.post('/lol', (request, response) => {
    var apikey = '?api_key='+'RGAPI-f717f760-d027-477b-8e14-f2d632ebd6d4';
    const {abc} = request.body; // buscando a informação github_username e techs de dentro do request body
    const apiResponse = axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/${abc}+${apikey}`)

    console.log(apiResponse.data);

    return response.json({teste : apiResponse.data})

});

// routes.get('/devs', DevController.index);
// routes.post('/devs', DevController.store);

// routes.get('/search', SearchController.index);

module.exports = routes; // exportando o objeto Routes
