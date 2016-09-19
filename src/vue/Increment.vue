<template>
    <button @click='increment'>Increment +1</button>
</template>

<script>
    import { incrementCounter } from '../vuex/actions/index'
    export default {
        vuex: {
            actions: {
                increment: incrementCounter
            }
        }
    }
</script>