import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        wanted_member: {},
        guessed_right: false
    },
    mutations: {
        ['SET_WANTED_MEMBER'](state, member) {
            state.wanted_member = member
        },
        ['SET_GUESSED_RIGHT'](state, status) {
            state.guessed_right = status
        }
    },
    actions: {},
    getters: {}
})
