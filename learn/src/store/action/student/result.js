import {searchStudents} from '../../../services/student'

export const CHANGELOADING = Symbol('change-loading')
export const CHANGEDATASANDTOTAL = Symbol('change-datas-and-total')

export const changeLoading = (payload) => ({
    type: CHANGELOADING,
    payload
})

export const changeDatasAndTotal = (payload) => ({
    type: CHANGEDATASANDTOTAL,
    payload
})


export function fetchStudents () {
    return async function (dispatch, getState) {
        dispatch(changeLoading(true))
        const condition = getState().condition;
        const resp = await searchStudents(condition);
        dispatch(changeDatasAndTotal({
            datas: resp.datas,
            total: resp.cont
        }))
        dispatch(changeLoading(false))
    }
} 

