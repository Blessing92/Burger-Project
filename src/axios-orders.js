import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-f919f.firebaseio.com/'
});

export default instance;