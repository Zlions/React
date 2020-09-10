import * as UsersAction from '../action/usersAction'

const initialState = [
    {
        id: 1,
        name: 'a1',
        sex: 1
    },
    {
        id: 2,
        name: 'a2',
        sex: 0
    }
]

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UsersAction.ADDUSER:
            return [ ...state, payload ]
        case UsersAction.DELETEUSER:
            return state.filter((it) => it.id !== payload)

        default:
            return state
    }
}
