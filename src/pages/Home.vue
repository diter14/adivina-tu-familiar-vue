<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
        <v-row align="center" justify="center" dense>
            <v-col>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated fadeInDown"
                    >
                    <div class="d-flex justify-center" v-if="display_cover">
                        <img
                            src="@/assets/img/family.svg"
                            class="mx-auto main-image"
                        />
                    </div>
                </transition>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated fadeInRight"
                    >
                    <h1
                        class="text-center font-weight-bold mb-3"
                        v-if="display_cover"
                    >
                        ¿Adivinas quién soy?
                    </h1>
                </transition>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated fadeInLeft"
                    >
                    <p class="text-center mb-3" v-if="display_cover">
                        Adivina qué familiar soy
                    </p>
                </transition>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated fadeInUp"
                    >
                    <div class="d-flex justify-center" v-if="display_cover">
                        <v-btn
                            to="/adivinar"
                            dark
                            color="red accent-2"
                            >
                            ADIVINA
                            <v-icon dark right>
                                mdi-arrow-right
                            </v-icon>
                        </v-btn>
                    </div>
                </transition>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Bubble from '../components/svg/Bubble'
export default {
    name: 'Home',

    components: {
        Bubble,
    },

    data() {
        return {
            display_cover: false,
        }
    },

    mounted() {
        const self = this
        setTimeout(() => {
            self.display_cover = true
        }, 1000)
    },
}
</script>
