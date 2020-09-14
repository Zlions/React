import React from 'react'
import { connect } from 'dva'

function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={() => {
                props.onDecrease()
            }}> - </button>

            <button onClick={() => {
                props.onIncrease()
            }}> + </button>

            <button onClick={() => {
                props.onAsyncIncrease()
            }}> 异步+ </button>
        </div>
    )
}

const mapStateToProps = state => ({
    number: state.counter
})

const mapDispatchToProps = dispatch => ({
    onIncrease() {
        dispatch({
            type: 'counter/increase'
        })
    },
    onDecrease() {
        dispatch({
            type: 'counter/decrease'
        })
    },
    onAsyncIncrease () {
        dispatch({
            type: 'counter/asyncIncrease'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
