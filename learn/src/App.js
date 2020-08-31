import React, { useRef } from 'react'



export default function App() {

    const inpRef = useRef();
    return (
        <div>
            <input ref={inpRef} type="text" />
            <button onClick={() => {
                console.log(inpRef.current.value);
            }}>get text</button>
        </div>
    )
}
