import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://ayuhbackend-testing.onrender.com",
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
    }
});

axiosInstance.defaults.withCredentials = false;
axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;