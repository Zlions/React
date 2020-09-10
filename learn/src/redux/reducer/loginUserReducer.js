import * as LoginUserAction from '../action/loginUserAction'

export default (state = {}, { type, payload }) => {
    switch (type) {

    case LoginUserAction.ADDLOGINUSER:
        return { ...state, ...payload }

    default:
        return state
    }
}
