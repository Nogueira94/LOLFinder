const { Router } = require('express'); // para importar apenas alguma parte de dentro, utilizar chaves.
const DevController = require('./controllers/DevController'); // importando os dados do DevController para utilizar no post
const SearchController = require('./controllers/SearchController'); // importando os dados do DevController para utilizar no post
const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes; // exportando o objeto Routes
