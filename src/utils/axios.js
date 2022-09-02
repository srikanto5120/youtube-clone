import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://lws-task.herokuapp.com',
});

export default axiosInstance;
