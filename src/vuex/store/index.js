/**
 * Created by jtq19 on 2016/9/19.
 * 状态监控树
 */
import Vue from 'vue';
import Vuex from 'vuex';
//引入状态文件
import State from './state';

// 告诉 vue “使用” vuex
Vue.use(Vuex);
// 创建一个对象来保存应用启动时的初始状态
/**
const state = {
    // 应用启动时，count 置为0
    count: 0,
}
**/
//简化写法 到时候把初始的值全放到一个文件或者多个文件里面去
const state = State;

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO: 放置我们的状态变更函数
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    INCREMENT (state, amount) {
        state.count = state.count + amount
    },
    DECREMENT (state, amount){
        state.count = state.count - amount
    }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    mutations
})