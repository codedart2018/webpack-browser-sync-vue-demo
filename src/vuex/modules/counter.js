/**
 * Created by jtq19 on 2016/9/20.
 */
import { INCREMENT, DECREMENT } from '../mutation-type'
const state = {
    // 应用启动时，count 置为0
    count: 0
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO: 放置我们的状态变更函数
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    [INCREMENT] (state, amount) {
        state.count = state.count + amount
    },
    [DECREMENT] (state, amount){
        state.count = state.count - amount
    }
}

export default {
    state,
    mutations
}
