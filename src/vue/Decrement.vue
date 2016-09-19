<template>
    <button @click='decrement'>Decrement -1</button>
</template>

<script>
    import { decrementCounter } from '../vuex/actions/index'
    export default {
        vuex: {
            actions: {
                decrement: decrementCounter
            }
        }
    }
</script>