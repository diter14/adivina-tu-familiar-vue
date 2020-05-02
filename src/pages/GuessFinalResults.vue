<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
        <v-row align="center" justify="center" style="z-index:1">
            <v-col>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="font-weight-bold">
                            {{ title }}
                        </h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <div class="d-flex justify-center">
                            <img
                                :src="resultsImagePath"
                                class="mx-auto main-image"
                            />
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <span> {{ copy }} </span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn
                            color="red accent-2"
                            dark
                            class="font-weight-bold"
                            to="/adivinar"
                            >
                            VUELVE A JUGAR
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <p class="font-weight-bold">Si te gustó el juego, sígueme en redes</p>
                        <v-btn
                            dark
                            icon
                            small
                            class="mr-3"
                            href="https://www.facebook.com/Diter-Terrones-100441208333478/"
                            target="_blank"
                            >
                            <img src="@/assets/img/facebook.svg">
                        </v-btn>
                        <v-btn
                            dark
                            icon
                            small
                            class="mr-3"
                            href="https://www.twitter.com/Diter_Terrones"
                            target="_blank"
                            >
                            <img src="@/assets/img/twitter.svg">
                        </v-btn>
                        <v-btn
                            dark
                            icon
                            small
                            class="mr-3"
                            href="https://www.instagram.com/diter.terrones14"
                            target="_blank"
                            >
                            <img src="@/assets/img/instagram.svg">
                        </v-btn>
                        <p class="text-center font-weight-light mt-3">Diter Terrones</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Bubble from '../components/svg/Bubble'
import { mapGetters } from 'vuex'

export default {
    name: 'Guess',

    components: {
        Bubble,
    },

    data() {
        return {
        }
    },

    created() {
        this.$store.commit('CLEAR_PLAYED_MEMBERS')
    },

    computed: {
        ...mapGetters(['i_won', 'i_lost']),

        title() {
            return this.i_won
                        ? '¡¡¡ FELICIDADES !!!'
                        : this.i_lost
                            ? '¡ NO TE DESANIMES !'
                            : '¡ NO TE DESANIMES !'
        },

        copy() {
            return this.i_won
                        ? 'Eres un perfecto conocedor de tu FAMILIA'
                        : this.i_lost
                            ? 'Esta es tu oportunidad para conocer más a tu FAMILIA'
                            : 'Esta es tu oportunidad para conocer más a tu FAMILIA'
        },

        resultsImagePath() {
            let image = this.i_won
                        ? 'celebration'
                        : this.i_lost
                            ? 'you-lost'
                            : 'you-lost'
            return require(`@/assets/img/${image}.svg`)
        },

    },
}
</script>
