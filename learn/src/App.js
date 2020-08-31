import React, { useState, useRef, useImperativeHandle } from 'react'

function Test(props, ref) {
    useImperativeHandle(
        ref,
        // 该函数第一次加载组件后调用
        // 相当于给ref的current赋值为1
        // 使用依赖项，则第一次调用后，会进行缓存
        () => {

            return 1
        },
        []
    )
    return <h1 ref={ref}>Test</h1>
}

const TestWrapper = React.forwardRef(Test)

export default function App() {
    const ref = useRef()
    const [, forceUpdate] = useState({})
    return (
        <div>
            <TestWrapper ref={ref}/>
            <button onClick={() => {
                console.log(ref);
                forceUpdate();
            }}>click</button>
        </div>
    )
}
