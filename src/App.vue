<template>
    <v-app>
        <v-content>
            <v-container fill-height>
                <router-view></router-view>
            </v-container>
        </v-content>
        <main-footer></main-footer>
    </v-app>
</template>

<script>
import MainFooter from '@/components/MainFooter'
export default {
    name: 'App',
    components: {
        MainFooter
    },
    data() {
        return {}
    }
}
</script>
