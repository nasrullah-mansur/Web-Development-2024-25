import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        console.log(config);
        config.data = {
            ...config.data,
            _token: "62753de8-5772-45f0-a239-1c1e78a96fde",
        };

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (response) {
        console.log("this is response ...");

        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export { api };
