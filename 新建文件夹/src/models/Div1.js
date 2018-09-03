import request from '../utils/request'
import { fetch } from '../services/test'
export default {
    namespace: 'count',
    state: {
        text: '打印',
        num: 1
    },
    reducers: {
        add (state) { 
            return {
            ...state,
            num: state.num + 1
        } 
        },
        minus (state) { 
            return {
            ...state,
            num: state.num - 1
        } 
        },
        qaq (state) {
            console.log('qaq')
            return{
                state
            }
        }
    },
    effects: {
        *fetch ({ payload }, { call, put }) {
            console.log('fetch',payload)
            const data = yield call(fetch, payload)
            console.log(data)
        }
    }

}