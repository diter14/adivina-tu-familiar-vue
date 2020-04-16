<template>
    <div>
        <div class="bubble">
            <svg
                width="100%"
                height="151"
                viewBox="0 0 471 151"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M289.5 149.978C182.489 151.234 26.2139 83.9103 1 57.5V1H470V39.6169C468.006 98.072 396.511 148.722 289.5 149.978Z"
                    fill="#26A69A"
                />
                <path
                    d="M1 57.5C26.2139 83.9103 182.489 151.234 289.5 149.978C396.511 148.722 468.006 98.072 470 39.6169M1 57.5L470 39.6169M1 57.5V1H470V39.6169"
                    stroke="#26A69A"
                />
            </svg>
        </div>
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
                        <v-btn dark color="teal lighten-1" v-if="display_copy">
                            ADIVINA
                        </v-btn>
                    </div>
                </v-scroll-x-reverse-transition>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'Home',

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
        }, 2500)
    }
}
</script>
<style lang="scss">
.bubble {
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
}
</style>
