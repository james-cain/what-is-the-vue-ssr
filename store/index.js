import Vue from 'vue';
import axios from '~/plugins/axios';

export const state = () => ({
    loadUser: [],
    currentUser: {}
});

export const mutations = {
    GET_USER_LIST (state, action) {
        console.log(2222);
        console.log(action);
        state.loadUser = action;
    },
    GET_CURRENT_USER (state, aciton) {
        console.log(3333);
        console.log(action);
        if (state.loadUser && state.loadUser.length === 0) {
            state.currentUser = {};
        } else {
            let filterUser = state.loadUser.filter((item) => {
                return `/${action}/`.test(item.UserName);
            });
            state.currentUser = filterUser[0];
        }
    }
};

export const actions = {
    async loadUsers({ commit }) {
        let { data } = await axios.get('/api/user/json');
        console.log(1111);
        console.log(data.data);
        return new Promise((resolve, reject) => {
            if (data.code !== 0) {
                commit('GET_USER_LIST', data.data);
            }
            resolve();
        })
        
    },
    searchUser({ commit }, keyword) {
        commit('GET_CURRENT_USER', keyword);
    }
};
