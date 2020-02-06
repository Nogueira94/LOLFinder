const { Router } = require('express'); 
const LolController = require('./controllers/LolController'); 
const SearchController = require('./controllers/SearchController'); 
const routes = Router();

routes.get('/users', LolController.index);
routes.post('/users', LolController.store);

routes.get('/search', SearchController.index);

module.exports = routes; // exportando o objeto Routes
