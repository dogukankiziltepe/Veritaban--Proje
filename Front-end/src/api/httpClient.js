import axios from "axios"
import {config} from "./apiconfig"

axios.defaults.baseURL = config.url;

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.

axios.defaults.headers.post['Content-Type'] = 'application/json';
export async function Post(body,endpoint){
    const response = await axios.post(endpoint,JSON.stringify(body));
    return response;
}

export async function Get(endpoint){
    const response = await axios.get(endpoint);
    return response;
}