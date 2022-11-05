import axios from 'axios';

const API_SERVICE = axios.create({
  baseURL: 'https://valorant-api.com/v1/agents',
  timeout: 2000,
  params: {
    language: 'pt-BR',
  },
});

export default API_SERVICE;
