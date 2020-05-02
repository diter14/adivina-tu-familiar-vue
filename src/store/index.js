import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const NUMBER_OF_RIGHTS_TO_WIN = 5

export default new Vuex.Store({
    state: {
        game: {
            lives: 5,
            hits: 0,
        },
        played_members: [],
        wanted_member: {},
        is_guessed: false
    },
    actions: {},
    mutations: {
        ['SET_WANTED_MEMBER'](state, member) {
            state.wanted_member = member
        },
        ['SET_GUESSED_STATUS'](state, status) {
            state.is_guessed = status
            if (status) {
                state.game.hits++
            } else {
                state.game.lives--
            }
        },
        ['SET_PLAYED_MEMBER'](state, id) {
            state.played_members.push(id)
        },
        ['CLEAR_PLAYED_MEMBERS'](state) {
            state.played_members = []
        }
    },
    getters: {
        i_won: (state) => {
            return state.game.hits >= NUMBER_OF_RIGHTS_TO_WIN
        },
        i_lost: (state) => {
            return state.game.lives <= 0
        }
    }
})
