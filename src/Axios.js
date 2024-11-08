import axios from "axios";

const instance = axios.create({
    baseURL: "https://671f2a561dfc429919842765.mockapi.io/training/v1",
});

export default instance;