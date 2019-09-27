import Vue from "vue";

import { AxiosResponse } from "axios";

const setBackUrl = ({ commit }, payload) => {
    commit("SET_BACK_URL", payload);
};

const loadData = async ({ commit }) => {
    let response; // setting in typescript to AxiosResponse<any>

    try {
        response = await Vue.axios.get('vue');
    } catch (error) {
        console.log(error);
        
    }
}