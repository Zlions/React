export default {
    namespace: 'counter',
    state: 0,
    reducers: {
        increase(state) {
            return state + 1
        },
        decrease(state) {
            return state - 1
        }
    },
    effects: {
        *asyncIncrease(action, { call, put }) {
            yield call(delay, 2000);
            yield put({ type: 'increase' })
        }
    }
}


function delay(dur) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, dur);
    })
}