import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Guess from '../pages/Guess'
import GuessResults from '../pages/GuessResults'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/adivina',
        name: 'guess',
        component: Guess
    },
    {
        path: '/adivina/resultados',
        name: 'guess_results',
        component: GuessResults
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
