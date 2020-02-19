import axios from 'axios';

export const googleBookClient = axios.create({
    baseURL: 'https://www.googleapis.com/books/'
})