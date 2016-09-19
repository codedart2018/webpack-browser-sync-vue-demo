//noinspection JSAnnotator
import Vue from 'vue';
import Test from './vue/Test.vue';
Vue.component('Test', Test);
new Vue({
    el: "body",
    data: {
        ok: true
    }
})

