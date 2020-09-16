import { history } from 'umi'
import { searchStudents } from '../services/studeent'

export default {
    state: {
        condition: {
            page: 1,
            limit: 10,
            sex: -1,
            key: ''
        },
        result: {
            datas: [],
            total: 0
        }
    },
    reducers: {
        setResult(state, { payload: result }) {
            return {
                ...state,
                result
            }
        }
    },
    effects: {
        *fetchStudent(action, { put, call, select }) {
            const condition = yield select(state =>  state.student.condition);
            const result = yield call(searchStudents, condition)
            yield put({
                type: 'setResult',
                payload: result
            })
            return null;
        }
    },
    subscriptions: {
        listen({ dispatch }) {
            history.listen((router, type) => {
                if (router.pathname !== '/student') {
                    return;
                }
                dispatch({
                    type: 'fetchStudent'
                })
            })
        }
    }
}