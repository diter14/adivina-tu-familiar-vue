import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Guess from '../pages/Guess'
import GuessResults from '../pages/GuessResults'
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
        component: GuessResults,
        beforeEnter: (to, from, next) => {
            if ( !_.isEmpty(store.state.guessed_right) ) {
                next()
            } else {
                next('/')
            }
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
