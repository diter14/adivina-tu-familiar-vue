import store from '../store'
import _ from 'lodash'


export default function hasWantedMember ({ to, next }) {
    console.log(to)
    console.log(store.state)
    console.log(store.state.wanted_member)
    if ( _.isEmpty(store.state.wanted_member) ) {
        next('home')
    } else {
        next()
    }
}