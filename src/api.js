import axios from "axios";
import * as APP_CONFIG from './config/config';
import Constants from "./Utils/Constants";

const baseUrl = "";

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

const adminInstance = axios.create({
    baseURL: APP_CONFIG[APP_CONFIG.REACT_APP_ENVIRONMENT].BASE_API_URL_ADMIN_USER
});

const regularInstance = axios.create({
    baseURL: ""
});


export const makeRequest = (type, params, headers = {}, base = Constants.customer) => {//try again
    
    const options = {
        method: type,
        params: params,
        headers: {
            ContentType: "application/json",
            // Authorization: "Bearer " + token.data.access_token,
            'Access-Control-Allow-Origin': '*',
            

...headers
        }

    };
    
    if(['put', 'post', 'patch'].includes(type.toLowerCase())) {
        delete(options.params);
        options.data = params;
    }
    
    localStorage.setItem('savedTime', new Date().getTime());
    
    return axios.post(APP_CONFIG[APP_CONFIG.REACT_APP_ENVIRONMENT].BASE_API_URL_ADMIN_USER , {"username": options.data.username ,"password": options.data.password}).then(token=>{
      
        localStorage.setItem("sessionInfo.token", token.data.access_token);
        localStorage.setItem('savedTime', new Date().getTime());
       let hours = 2;
        let savedTime = localStorage.getItem('savedTime');
        if (savedTime && (new Date().getTime() - savedTime > hours * 60 * 60 * 1000)) {
            localStorage.clear();
        }

        options.headers['Authorization'] = "Bearer " +token.data.access_token;
        switch(base){
            case Constants.admin :
                return adminInstance(options)
            case Constants.regular :
                return regularInstance(options)
            default :
            return axiosInstance(options)
        }
        // return axiosInstance(options);
    }).catch(error=>{console.error(error)});

}
