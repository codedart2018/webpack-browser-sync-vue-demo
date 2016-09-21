/**
 * Created by jtq19 on 2016/9/19.
 * 状态监控树
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Counter from '../modules/counter';
Vue.use(Vuex);

export default new Vuex.Store({
    //todo 这里引用了modules 模块 在其它地方需要这个数据的时候 不管是在getters 还是 actions里面 都是用state.模块名.初始名称 例：state.Counter.count 不然无法找到这个值或者对象
    //全程无法取出数据的时候可以用 Vue工具查看数据树 也可以用console.log 直接把state 打印出来看 这样数据一目了然好跟踪
    modules: {
        Counter
    },
})