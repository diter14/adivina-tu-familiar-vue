<template>
    <v-app>
        <v-content>
            <transition
                name="custom-classes-transition"
                enter-active-class="animated"
                leave-active-class="animated fadeOutLeft"
                >
                <router-view></router-view>
            </transition>
        </v-content>
    </v-app>
</template>

<script>
import './assets/scss/app.scss'
import 'animate.css'
export default {
    name: 'App',
    data() {
        return {}
    },
}
</script>
