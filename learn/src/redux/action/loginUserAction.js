export const ADDLOGINUSER = Symbol('addLoginUser');

export const AddLoginUserAction = (payload) => ({
    type: ADDLOGINUSER,
    payload
})
