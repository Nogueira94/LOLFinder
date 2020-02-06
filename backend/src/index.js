const express = require('express'); // Express serve para conseguir colocar o sistema no ar
const mongoose = require('mongoose'); // Lib para dar acesso ao node a base do mongo
const routes = require('./routes'); // sempre que importar um export, por sempre o caminho do arquivo, senão o programa ira procurar no node_modules o nome

const app = express(); // criação da variavel app chamando o express

mongoose.connect('mongodb+srv://admin:admin@cluster0-o4589.mongodb.net/lol?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());  // definir para o express entender o JSON, lembrar de por o json sempre antes do routes, pois o node le de forma linear
app.use(routes); // recadastrar as rotas no index

// COMENTARIOS

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros Express:
// Query Params: request.query (Filtros, ordenação, paginação..) (Ficam visiveis na URL, incorporados na URL) (Quase sempre são GET)
// Route Params: request.params (Identificar um recurso na alteração ou remoção) (Quase sempre são PUT ou DELETE)
// Body: request.body (Dados para criação ou alteração de um registro) (Quase sempre são PUT ou POST)

// MongoDB (não-relacional)
 
//app.post('/users', (request, response) => { // a seta serve para não precisar escrever function, e o / no parametro do get significa o "home" do local
//    console.log(request.body);
//    return response.json({ message: 'Hello OmniStack'});
//});

app.listen(3333); // criação da porta 3333 para conseguir rodar o sitema, em localhost:3333
