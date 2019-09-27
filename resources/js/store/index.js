import Vue from "vue";

// import 'promise-polyfill/src/polyfill';
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

import posts from "./posts";
import comments from "./comments";
import users from "./users";

Vue.use(Vuex);

const modules = {
    posts,
    comments,
    users,
    account
};

const store = new Vuex.store({
    modules,
    actions,
    getters,
    mutations,
    state
});

export default store;
