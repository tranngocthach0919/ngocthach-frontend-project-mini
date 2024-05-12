
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3100/',
});

export default axiosInstance;