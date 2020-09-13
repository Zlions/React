import { take } from 'redux-saga/effects'
import { actionTypes } from '../action/counter'

/**
 * saga任务
 */
export default function* () {
    console.log('begin');
    const action = yield take(actionTypes.increase);
    console.log(action, 'action run');
}