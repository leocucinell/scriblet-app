import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/" //NOTE: Edit me when upload api
});

export default api