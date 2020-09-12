import * as resultAction from '../../action/student/result'


const initialState = {
    datas: [],
    total: 0,
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case resultAction.CHANGELOADING:

            return {
                ...state,
                isLoading: payload
            }
        case resultAction.CHANGEDATASANDTOTAL:
            return {
                ...state,
                datas: payload.datas,
                total: payload.total
            }

        default:
            return state
    }
}
