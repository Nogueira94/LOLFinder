// criando controllers para abstração, para rotas não ficar com os campos, geralmente criar um por entidade
// controller tem 5 funções no max : index(listar), show(busca unica), store(criar), update(alterar), destroy(deletar)

const axios = require('axios'); // lib para fazer chamadas para outras API's , para pegar as infos do github
const User = require('../models/Users'); // chamando o model Dev dentro da pasta models e arquivo Dev .. para voltar uma pasta = 
const parseStringAsArray = require ('../utils/parseStringAsArray');
var apikey = '?api_key=' + 'RGAPI-f717f760-d027-477b-8e14-f2d632ebd6d4';

module.exports = { 

    async index(resquest, response){
        const users = await User.find(); // returnar a lista com todos Devs, sem nenhum filtro
        return response.json(users);
    },

    async store(request, response) { // buscas em outras API podem demorar, então colocar como async (store é o nome da função)
        const {name, profileIconId, summonerLevel, id, accountId, mainRole, secRole, latitude, longitude} = request.body; // buscando a informação github_username e techs de dentro do request body
    
        const user = await User.findOne({name}); // verifica se o github_username ja existe no banco

        if (!user){ // se dev não existir ira cadastrar
            const apiResponse = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}+${apikey}`) // a resposta da chamada API será ( utilizar ` no lugar da barra simples, para conseguir colocar variaveis dentro da string )
            // a flag await faz com que aguarde a resposta para continuar com o codigo
            
            //apiResponse.data , retorna os dados encontrados pela API
            const { name , profileIconId, summonerLevel, id, accountId } =  apiResponse.data; //buscar apenas o nome, url do avatar e a bio ( name = login, condição para que se o name não existir, ele ira pegar o login)
        
            console.log(apiResponse.data);

            const apiResponse2 = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}+${apikey}`);

            
            const {wins, losses, rank, tier } = apiResponde2.data;

            // const techsArray = techs.split(',').map(tech => tech.trim()); // cria o texto em vetores separados por virgula, e o .map é para percorrer o texto e o tech.trim é para eliminar espaços em branco antes e depois das palavras para o array.
            // const techsArray = parseStringAsArray(techs); // realiza o mesmo comando acima, porém buscando ele como função salva
            
            //const mainRole = 

            //const secRole = 

        //     const location = { // definido no PointSchema
        //     type: 'Point',
        //     coordinates: [longitude, latitude] // mongo utiliza primeiro long e dps lat
        //     }
        
        //     dev = await Dev.create({ // salvando retorno na função dentro da variavel, para ter os valores
        //         github_username,
        //         name,
        //         avatar_url,
        //         bio, // utilizar quando o nome da propriedade e o nome da variavel forem com nomes iguais
        //         techs: techsArray, // utilizar quando o nome da propriedade e o nome da variavel forem com nomes diferentes
        //         location
        //     });
        // };    
    
        // return response.json(dev); // retornar os dados da variavel dev
    }
}
}
