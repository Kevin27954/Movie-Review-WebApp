import axios from 'axios';

export default axios.create({
    //Idea is to run both project at the same time
    //Or to have the local host run on a server online in order to get 
    //data from my backend.
    baseURL:'http://localhost:8080',
    //base url is the problem find the correct url.
    // baseURL:"https://itunes.apple.com/search",
    headers:{
        // "Access-Control-Allow-Origin": "*",
    },
    withCredentials: false,

})