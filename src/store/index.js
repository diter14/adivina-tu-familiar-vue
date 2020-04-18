import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        wanted_member: {}
    },
    mutations: {
        ['SET_WANTED_MEMBER'](state, member) {
            state.wanted_member = member
        }
    },
    actions: {},
    modules: {}
})
