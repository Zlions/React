import store from './index'
import { fetchStudents } from './action/student/result'

// store.dispatch(changeDatasAndTotal(true))


store.dispatch(fetchStudents())