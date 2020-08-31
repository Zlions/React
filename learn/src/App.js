import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
export default function App() {
    const [n, setN] = useState(0)
    // useEffect(() => {
    //     h1Ref.current.innerText = '123'
    // })


    useLayoutEffect(() => {
        h1Ref.current.innerText = '123'
    })
    const h1Ref = useRef();

    return (
        <div>
            <h1 ref={h1Ref}>{n}</h1>
            <button onClick={() => {
                setN(n + 1)
            }}>click</button>
        </div>
    )
}
