import axios from "axios";

const baseUrl = 'http://10.233.28.144:8001/oauth/token/';

const axiosInstance = axios.create({
    baseURL: baseUrl,
});  
 
export const makeRequest = (url, type, params, headers = {}) => {
    // const user = JSON.parse(localStorage.getItem('user'));
    // let token = '';
    // if(user && user.token) {
    //     token = user.token;
    // }
    const options = {
        method: type,
        url: url,
        params: params,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzQ4OTUyMDksInVzZXJfbmFtZSI6Im5hbmEiLCJqdGkiOiJhMzYzM2NhOC1lMDIyLTQ1YzgtOTA4My01OGZlYmM4MzM3MmIiLCJjbGllbnRfaWQiOiJmb29DbGllbnRJZCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.KhUW8Ow4rQhC0BQO0B92bGiKScrPsAm1WpgoACNDIeY" ,
...headers
        }

    };
    if(['put', 'post', 'patch'].includes(type.toLowerCase())) {
        delete(options.params);
        options.data = params;
    }
    return axiosInstance(options);
}
