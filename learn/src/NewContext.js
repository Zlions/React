import React, { Component } from 'react'

const ctx = React.createContext()

function ChildA() {
    return <div>
        <h1>ChildA</h1>
        <p>
            <ctx.Consumer>
                {value => {
                    return <>
                        {value.a}, {value.b}
                    </>
                }}
            </ctx.Consumer>
        </p>
        <ChildB />
    </div>
}

class ChildB extends Component {

    static contextType = ctx;

    render() {
        return <div>
            <h1>ChildB</h1>
            <p>
                来自context a:{this.context.a}
            </p>
        </div>
    }
}

export default class NewContext extends Component {

    state = {
        a: 0,
        b: 'abc'
    }

    render() {
        return (
            <ctx.Provider value={this.state}>
                <ChildA />
            </ctx.Provider>
        )
    }
}
