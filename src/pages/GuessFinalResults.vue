<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
        <v-row align="center" justify="center">
            <v-col>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="font-weight-bold">
                            FELICIDADES
                        </h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <div class="d-flex justify-center">
                            <img
                                src="@/assets/img/celebration.svg"
                                class="mx-auto main-image"
                            />
                        </div>
                    </v-col>
                </v-row>
                <v-row >
                    <v-col cols="12" class="text-center">
                        <p> Eres un perfecto conocedor de tu </p>
                        <h2> FAMILIA </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn
                            color="red accent-2"
                            dark
                            class="font-weight-bold"
                            href="https://www.facebook.com/Diter-Terrones-100441208333478/"
                            target="_blank"
                        >
                            COMPÁRTELO
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import family from '../resources/family'
import Bubble from '../components/svg/Bubble'
import { mapState } from 'vuex'

export default {
    name: 'Guess',

    components: {
        Bubble,
    },

    data() {
        return {
            members: [],
        }
    },

    created() {
        this.members = family.members
    },

    computed: {
        ...mapState(['wanted_member', 'is_guessed']),

        memberImagePath() {
            return require(`@/assets/img/${this.wanted_member.img_path}`)
        },
    },
}
</script>
