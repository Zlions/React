import { all } from 'redux-saga/effects'
import counterTask from './counterTask'
import studentTask from './studentTack'
/**
 * saga任务
 */
export default function* () {
    const action = yield all([counterTask(), studentTask()]);  // 该函数传入一个数组，数组中放入生成器，saga会等待所有的生成器全部完成后，才会进一步处理
    console.log(action, 'action run');
}