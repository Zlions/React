import { createStore } from 'redux'
import reducer from './reducer/index'

import { AddUserAction, DeleteUserAction } from './action/usersAction'



const store = createStore(reducer);

console.log(store.getState());

store.dispatch(AddUserAction({
    id: 3,
    name: 'a3',
    sex: 0
}))

console.log(store.getState());

store.dispatch(DeleteUserAction(3))

console.log(store.getState());