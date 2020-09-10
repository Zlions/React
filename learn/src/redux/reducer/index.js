import LoginUserReducer from './loginUserReducer'
import usersReducer from './usersReducer'
import { combineReducers } from 'redux'

// export default (state = {}, action) => {
//     const newState = {
//         loginUser: LoginUserReducer(state.loginUser, action),
//         users: usersReducer(state.users, action)
//     }
//     return newState
// }


export default combineReducers({
    loginUser: LoginUserReducer,
    users: usersReducer
})