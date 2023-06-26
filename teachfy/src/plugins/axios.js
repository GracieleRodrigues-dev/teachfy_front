import axios from 'axios';

let baseURL = 'http://localhost:8000/api/'; // URL de base padrão para ambiente de navegador

if (typeof process !== 'undefined' && process.env.REACT_APP_API_BASE_URL) {
  // Ambiente de servidor Node.js
  baseURL = process.env.REACT_APP_API_BASE_URL;
}

const api = axios.create({
  baseURL: baseURL
});

export default api;
