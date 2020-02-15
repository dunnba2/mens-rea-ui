import axios from 'axios';

export const iDreamBookClient = axios.create({
    baseURL: 'http://idreambooks.com/api/publications/'
})