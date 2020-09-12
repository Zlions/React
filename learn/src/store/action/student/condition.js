export const CHANGECONDITION = Symbol('change-condition')

export const changeCondition = (payload) => ({
    type: CHANGECONDITION,
    payload
})
