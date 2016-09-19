<template>
    <div>
        <Display></Display>
        <Increment></Increment>
    </div>
</template>

<script>

    import Display from './Display.vue'
    import Increment from './Increment.vue'
    //store就是vuex里用来存储组件树用到的所有状态的对象
    import store from '../vuex/store/index';

    export default {
        components: {
            Display: Display,
            Increment: Increment
        },
        // 在根组件加入 store，让它的子组件和 store 连接
        store: store
    }
</script>