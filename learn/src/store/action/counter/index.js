export const actionTypes = {
    increase: 'increase',
    decrease: 'decrease',
    asyncIncrease: 'asyncIncrease'
}

export function increase() {
    return {
        type: actionTypes.increase
    }
}

export function decrease() {
    return {
        type: actionTypes.decrease
    }
}

export function asyncIncrease() {
    return {
        type: actionTypes.asyncIncrease
    }
}