import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/index'

import { AddUserAction, DeleteUserAction } from './action/usersAction'
import { createLogger } from 'redux-logger'

const logger = createLogger({
    collapsed: false,
    duration: true
})

const store = createStore(reducer, applyMiddleware(logger));


store.dispatch(AddUserAction({
    id: 3,
    name: 'a3',
    sex: 0
}))


store.dispatch(DeleteUserAction(3))
