import { takeEvery, delay, put } from 'redux-saga/effects'
import { actionTypes, increase } from '../action/counter'


function* asyncIncrease () {
    yield delay(2000);
    yield put(increase())
}

export default function* () {
    
    yield takeEvery(actionTypes.asyncIncrease, asyncIncrease)
    console.log('listen asyncIncrease');

}