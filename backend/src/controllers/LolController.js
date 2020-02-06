const axios = require('axios'); 
const User = require('../models/Users'); 
var apikey = '?api_key='+'RGAPI-f2c24940-579f-4966-ba13-b97e54d02dfd';

module.exports = { 

    async index(request, response){
        const users = await User.find(); 
        return response.json(users);
    },

    async store(request, response) { 
        const {name, mainRole, secRole, latitude, longitude} = request.body;
        
        const apiResponse = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}${apikey}`) ;
        
        var id = apiResponse.data.id;

        console.log(apiResponse.data)

        var user = await User.findOne({id});

        if (!user){             

            const apiResponse2 = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}${apikey}`);

            var unranked = apiResponse2.data.rank;

            console.log(apiResponse2.data)

            const location = {
            type: 'Point',
            coordinates: [longitude, latitude] 
            }
            
            if (apiResponse2.data != "") {
                var newObject = {
                    "name": apiResponse.data.name,
                    "profileIconId": apiResponse.data.profileIconId,
                    "summonerLevel": apiResponse.data.summonerLevel,
                    "id": apiResponse.data.id,
                    "wins": apiResponse2.data[0].wins,
                    "losses": apiResponse2.data[0].losses,
                    "rank": apiResponse2.data[0].rank,
                    "tier": apiResponse2.data[0].tier,
                    "mainRole": request.body.mainRole,
                    "secRole" : request.body.secRole,
                    "location": location
                }
            } else {
                var newObject = {
                    "name": apiResponse.data.name,
                    "profileIconId": apiResponse.data.profileIconId,
                    "summonerLevel": apiResponse.data.summonerLevel,
                    "id": apiResponse.data.id,
                    "wins": null,
                    "losses": null,
                    "rank": null,
                    "tier": null,
                    "mainRole": request.body.mainRole,
                    "secRole" : request.body.secRole,
                    "location": location
                }
            }         

            console.log(newObject)
        
            user = await User.create(newObject);
        };        
        return response.json(user);
    }
}
