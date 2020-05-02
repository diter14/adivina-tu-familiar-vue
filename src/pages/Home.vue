<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
        <v-carousel 
            cycle
            :light="true"
            :interval="5500"
            :show-arrows="false"
            hide-delimiter-background
            :height="carousel_height"
            >
            <v-carousel-item>
                <v-row
                    align="center"
                    justify="center"
                    dense
                    class="fill-height"
                    >
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
                                ¿Sabes de verdad qué familiar soy?
                            </p>
                        </transition>
                        <transition
                            name="custom-classes-transition"
                            enter-active-class="animated fadeInUp"
                            >
                        </transition>
                    </v-col>
                </v-row>
            </v-carousel-item>
            <v-carousel-item
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <v-row
                    align="center"
                    justify="center"
                    dense
                    class="fill-height"
                    >
                    <v-col>
                        <h2
                            class="text-center font-weight-bold mb-4"
                            >
                            Sólo tienes 15 segundos para adivinar, sigue las pistas
                        </h2>
                        <div class="d-flex justify-center">
                            <img
                                src="@/assets/img/tour-timer.png"
                                class="mx-auto main-image"
                            />
                        </div>
                    </v-col>
                </v-row>
            </v-carousel-item>
            <v-carousel-item
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <v-row
                    align="center"
                    justify="center"
                    dense
                    class="fill-height"
                    >
                    <v-col>
                        <h2
                            class="text-center font-weight-bold mb-4"
                            >
                            Puedes usar los comodines hasta en 2 oportunidades
                        </h2>
                        <div class="d-flex justify-center">
                            <img
                                src="@/assets/img/tour-comodin.png"
                                class="mx-auto main-image"
                            />
                        </div>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
        <v-row>
            <v-col class="d-flex justify-center align-center">
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated fadeInUp"
                    >
                    <v-btn
                        to="/adivinar"
                        dark
                        color="red accent-2"
                        v-if="display_cover"
                        >
                        EMPIEZA
                        <v-icon dark right>
                            mdi-arrow-right
                        </v-icon>
                    </v-btn>
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
            carousel_height: 450
        }
    },

    created() {
        if (window.matchMedia) {
            const mq = window.matchMedia('(min-width: 375px)')
            mq.addListener(this.changeScreenWidth)
            this.changeScreenWidth(mq)
        }
    },

    mounted() {
        const self = this
        setTimeout(() => {
            self.display_cover = true
        }, 1000)
    },

    methods: {
        changeScreenWidth(mq) {
            this.carousel_height = (mq.matches) ? 600 : 500
        }
    }
}
</script>
