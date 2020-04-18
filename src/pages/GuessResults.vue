<template>
    <v-container fill-height>
        <bubble />
        <v-row align="center" justify="center">
            <v-col>
                <h1>Resultados</h1>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import family from '../resources/family'
import Bubble from '../components/svg/Bubble'

export default {
    name: 'Guess',

    components: {
        Bubble
    },

    data() {
        return {
            members: []
        }
    },

    created() {
        this.members = family.members
    },

    mounted() {},

    methods: {},
    watch: {}
}
</script>
