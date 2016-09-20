<template>
    <div>
        <Display></Display>
        <div>
            <Increment></Increment>
            <Decrement></Decrement>
        </div>
    </div>
</template>

<script>

    import Display from './Display.vue'
    import Increment from './Increment.vue'
    import Decrement from './Decrement.vue'

    export default {
        components: {
            Display: Display,
            Increment: Increment,
            Decrement //这种写法必须在ES6 babel下才行
        }
    }
</script>