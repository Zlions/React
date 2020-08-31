import React, { useState, useMemo } from 'react'



export default function App() {
    const [range,] = useState({ min: 1, max: 1000 })
    const [n, setN] = useState(0)

    const list = useMemo(() => {
        const list = [];
        for (let i = range.min; i < range.max; i++) {
            console.log(i);
            list.push(<li key={i}>{i}</li>)
        }
        return list
    }, [range.min, range.max])


    return (
        <div>
            <input type="number" value={n} onChange={() => {
                setN(n + 1)
            }} />
            <ul>
                {list}
            </ul>
        </div>
    )
}
