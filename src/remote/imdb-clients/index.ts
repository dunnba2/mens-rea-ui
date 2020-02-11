import axios from 'axios';

export const imdbClient = axios.create({
    baseURL: 'http://www.omdbapi.com/'
})