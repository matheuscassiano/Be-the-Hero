import axios from 'axios';

const api = axios.create({
    baseURL: 'https://be-the-hero-dev.herokuapp.com/'
});

export default api;
