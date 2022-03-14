import axios from "axios";

const api = axios.create({
    baseURL: "http://18.236.226.185:4500/" //NOTE: Edit me when upload api
});

export default api