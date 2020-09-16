export default {
    state: null,
    reducers: {
        setLoginUser(state, { payload }) {
            return payload
        }
    },
    effects: {
        *login({ payload }, { put }) {
            if (payload.loginId === 'admin' && payload.loginPwd === '123123') {
                yield put({
                    type: 'setLoginUser',
                    payload: payload.loginId
                })

                localStorage.setItem('loginId', payload.loginId)
                return true;
            }
            return false;
        },
        *logout(action, { put }) {
            yield put({
                type: 'setLoginUser',
                payload: null
            })
            localStorage.removeItem('loginId')
            return true
        }
    },
    subscriptions: {
        syncLocalstorage({ dispatch }) {
            const loginId = localStorage.getItem('loginId')
            if (loginId) {
                dispatch({
                    type: 'setLoginUser',
                    payload: loginId
                })
            }
        }
    }
}