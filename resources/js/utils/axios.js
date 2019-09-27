import Vue from "vue";

import axios from "axios";

Vue.use(axios);

// baseUrl is a global variable, we get it through Laravel
const baseUrl = "/api";
console.log(baseUrl);

axios.defaults.baseURL = baseUrl;

// Don't throw errors on 422, 403 and 401 status code (used for validations)
axios.defaults.validateStatus = status =>
    status === 422 ||
    status === 401 ||
    status === 403 ||
    (status >= 200 && status < 300);
