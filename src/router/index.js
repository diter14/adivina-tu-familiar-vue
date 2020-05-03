import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Guess from '../pages/Guess'
import GuessSingleResults from '../pages/GuessSingleResults'
import GuessFinalResults from '../pages/GuessFinalResults'
import store from '../store'
import _ from 'lodash'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/adivinar',
        name: 'guess',
        component: Guess
    },
    {
        path: '/adivinar/resultados',
        name: 'guess_results',
        component: GuessSingleResults,
        beforeEnter: (to, from, next) => {
            if ( !_.isEmpty(store.state.wanted_member) ) {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/adivinar/fin-del-juego',
        name: 'endgame',
        component: GuessFinalResults
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
