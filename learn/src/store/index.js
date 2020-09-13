import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/index'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagaTask from './saga'

const sagaMid = createSagaMiddleware(); // 创建一个saga中间件



const store = createStore(reducer, applyMiddleware(sagaMid, logger))

sagaMid.run(sagaTask)


export default store