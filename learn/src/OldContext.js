import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ChildB extends Component {

    static contextTypes = {
        a: PropTypes.number,
        b: PropTypes.string.isRequired
    }

    constructor (props, context) {
        super(props, context)
        console.log(context);
    }

    render() {
        return (
            <p> ChildB
                来自上下文中的数据：a: {this.context.a}  </p>
        )
    }
}

export default class OldContext extends Component {

    static childContextTypes = {
        a: PropTypes.number,
        b: PropTypes.string.isRequired
    }

    getChildContext() {
        return {
            a: 123,
            b: '123'
        }
    }

    render() {
        return (
            <div>
                <ChildB />
            </div>
        )
    }
}
