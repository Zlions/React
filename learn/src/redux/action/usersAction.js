export const ADDUSER = Symbol('addUser');
export const DELETEUSER = Symbol('deleteUser')



export const AddUserAction = (payload) => ({
    type: ADDUSER,
    payload
})

export const DeleteUserAction = (payload) => ({
    type: DELETEUSER,
    payload
})

