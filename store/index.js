import Vue from 'vue';
import axios from '~/plugins/axios';

export const state = () => ({
    loadUser: [],
    currentUser: {}
});

export const mutations = {
    GET_USER_LIST (state, action) {
        state.loadUser = action;
        state.loadUser.map((item, index) => item.rank = index + 1);
        console.log(state.loadUser);
    },
    GET_CURRENT_USER (state, action) {
        const regex = new RegExp(action.keyword, 'i');
        if (state.loadUser && state.loadUser.length === 0) {
            state.currentUser = {};
        } else {
            let filterUser = state.loadUser.filter((item) => {
                return regex.test(item.UserName);
            });
            state.currentUser = filterUser[0] ? filterUser[0] : {};
            console.log(state.currentUser);
        }
    },
    GET_NEXT_USER (state) {
        const currentUser = state.currentUser;
        if (currentUser.rank === state.loadUser.length) {
            state.currentUser = state.loadUser[0]
        } else {
            state.currentUser = state.loadUser[currentUser.rank]
        }
    },
    GET_PREV_USER (state) {
        const currentUser = state.currentUser;
        if (currentUser.rank === 1) {
            state.currentUser = state.loadUser[state.loadUser.length - 1]
        } else {
            state.currentUser = state.loadUser[currentUser.rank - 2]
        }
    }
};

export const actions = {
    async loadUsers({ commit }) {
        let { data } = await axios.get('/api/user/json');
        return new Promise((resolve, reject) => {
            if (data.code === 0) {
                commit('GET_USER_LIST', data.data);
                commit('GET_CURRENT_USER', { keyword:'' });
            }
            resolve();
        })
        
    },
    searchUser({ commit }, keyword) {
        commit('GET_CURRENT_USER', keyword);
    },
    next({ commit }) {
        commit('GET_NEXT_USER');
    },
    prev( { commit }) {
        commit('GET_PREV_USER');
    }
};
