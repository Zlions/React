import condition from './student/condition'
import result from './student/result'
import { combineReducers } from 'redux'
import counter from './counter'

export default combineReducers({
    condition,
    result,
    counter
})