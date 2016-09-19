//noinspection JSAnnotator
import Vue from 'vue';
import Display from './vue/display.vue';
// 定义
// var MyComponent = Vue.extend({
//     // 声明props
//     props: ['msg', 'title'],
//     template: '<div>这里的内容会替换组件里的内容。。{{msg}}{{title}}</div>'
// });
// // 注册
// Vue.component('my-component', MyComponent);
//
// new Vue({
//     el: 'body',
//     data: {
//         message: "Hello Vue",
//         parentMsg: ''
//     }
// });


// 注册子组件
// 将当前消息派发出去
// Vue.component('child', {
//     template: '#child-template',
//     data: function () {
//         return { msg: 'hello' }
//     },
//     methods: {
//         notify: function () {
//             if (this.msg.trim()) {
//                 this.$dispatch('child-msg', this.msg)
//                 this.msg = ''
//             }
//         }
//     }
// })
//
// // 初始化父组件
// // 将收到消息时将事件推入一个数组
// var parent = new Vue({
//     el: '#events-example',
//     data: {
//         messages: []
//     },
//     // 在创建实例时 `events` 选项简单地调用 `$on`
//     events: {
//         'child-msg': function (msg) {
//             // 事件回调内的 `this` 自动绑定到注册它的实例上
//             this.messages.push(msg)
//         }
//     }
// });
//
// var child = parent.$refs.profile;
// console.log(child);
//
// Vue.component('my-component', {
//     template: '<div><h1>This is my component!</h1><slot>如果没有分发内容则显示我。</slot></div>',
// })
//
//
Vue.component('Display', Display)
new Vue({
    el: '#demo',
    data: {
        show: true,
        transitionState: 'Idle'
    },
    transitions: {
        expand: {
            beforeEnter: function (el) {
                el.textContent = 'beforeEnter'
            },
            enter: function (el) {
                el.textContent = 'enter'
            },
            afterEnter: function (el) {
                el.textContent = 'afterEnter'
            },
            beforeLeave: function (el) {
                el.textContent = 'beforeLeave'
            },
            leave: function (el) {
                el.textContent = 'leave'
            },
            afterLeave: function (el) {
                el.textContent = 'afterLeave'
            }
        }
    }
});

new Vue({
    el: "#demo2",
    data: {
        ok: true
    },
    transitions: {
        bounce: {
            enterClass: 'rubberBand',
            leaveClass: 'lightSpeedOut',
            type: 'animation'
        }
    }
})

