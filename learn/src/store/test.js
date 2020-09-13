import store from './index'
import { asyncIncrease } from './action/counter'

console.log();

window.asyncIncrease = function () {
    store.dispatch(asyncIncrease())
}

// store.dispatch(fetchStudents())