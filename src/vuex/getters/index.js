/**
 * Created by jtq19 on 2016/9/19.
 */
// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

export function getCount (state) {
    return state.count
}