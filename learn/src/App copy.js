import React, { useState } from 'react'

class Test extends React.PureComponent {
    render() {
        console.log("test render");
        return <div>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.onClick}>change</button>
        </div>
    }
}


export default function App() {
    console.log("app render");
    const [txt, setTxt] = useState(123)
    const [n, setN] = useState(0)

    return (
        <div>
            {/* 函数地址每次渲染都发生了变化，导致子组件跟着重渲染，若子组件是优化过的，则可能导致优化失效 */}
            <Test text={txt} onClick={() => {
                setTxt(123)
            }} />

            <input type="number" name="" id="" value={n} onChange={e => {
                setN(e.target.value)
            }} />
        </div>
    )
}
