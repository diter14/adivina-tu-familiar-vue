<template>
    <div :class="position">
        <svg
            width="100%"
            height="151"
            viewBox="0 0 471 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M289.5 149.978C182.489 151.234 26.2139 83.9103 1 57.5V1H470V39.6169C468.006 98.072 396.511 148.722 289.5 149.978Z"
                :fill="color"
            />
            <path
                d="M1 57.5C26.2139 83.9103 182.489 151.234 289.5 149.978C396.511 148.722 468.006 98.072 470 39.6169M1 57.5L470 39.6169M1 57.5V1H470V39.6169"
                :stroke="color"
            />
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#ffca28'
        },
        top: {
            type: Boolean,
            default: false
        },
        bottom: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        position() {
            return (
                'bubble ' + (this.bottom ? 'bottom' : this.top ? 'top' : 'top')
            )
        }
    }
}
</script>
<style lang="scss">
.bubble {
    position: absolute;
    width: 100%;
}

.top {
    top: -30px;
    left: 0;
}

.bottom {
    left: 0;
    bottom: -30px;
    transform: rotate(180deg);
}
</style>
