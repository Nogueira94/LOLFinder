import axios from 'axios'; // lib para fazer chamadas para API rest

const api = axios.create({
    baseURL: 'http://localhost:3333' // chamada do backend
});

export default api;


