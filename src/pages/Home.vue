<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
        <v-row align="center" justify="center">
            <v-col>
                <v-scroll-x-transition>
                    <div class="d-flex justify-center" v-if="display_cover">
                        <img
                            src="/img/family.svg"
                            class="mx-auto"
                            width="80%"
                        />
                    </div>
                </v-scroll-x-transition>
                <v-scroll-x-reverse-transition>
                    <h1
                        class="text-center font-weight-bold mb-5"
                        v-if="display_copy"
                    >
                        ¿Adivinas qué familiar soy?
                    </h1>
                </v-scroll-x-reverse-transition>
                <v-scroll-x-transition>
                    <p class="text-center mb-5" v-if="display_copy">
                        ¿Estás seguro?
                    </p>
                </v-scroll-x-transition>
                <v-scroll-x-reverse-transition>
                    <div class="d-flex justify-center">
                        <v-btn
                            to="/adivinar"
                            dark
                            color="red accent-2"
                            v-if="display_copy"
                        >
                            ADIVINA
                        </v-btn>
                    </div>
                </v-scroll-x-reverse-transition>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Bubble from '../components/svg/Bubble'
export default {
    name: 'Home',

    components: {
        Bubble
    },

    data() {
        return {
            display_cover: false,
            display_copy: false
        }
    },

    mounted() {
        const self = this
        setTimeout(() => {
            self.display_cover = true
        }, 1200)
        setTimeout(() => {
            self.display_copy = true
        }, 2000)
    }
}
</script>
