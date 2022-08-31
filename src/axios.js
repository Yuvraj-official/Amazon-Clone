import axios from "axios";

const instance = axios.create({
    baseURL: "http://base_url/api"
})



export default instance;

