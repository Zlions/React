
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


