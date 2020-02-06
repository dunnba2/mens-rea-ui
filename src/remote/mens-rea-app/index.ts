import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://mensrea-env.79cmyihwep.us-east-1.elasticbeanstalk.com/'
})