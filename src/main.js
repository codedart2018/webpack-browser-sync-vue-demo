//noinspection JSAnnotator
import Vue from 'vue';
import App from './vue/App.vue';
//store就是vuex里用来存储组件树用到的所有状态的对象
import store from '../vuex/store/index';
new Vue({
    el: "body",
    components: {
        App
    },
    // 在根组件加入 store，让它的子组件和 store 连接
    store: store
});
