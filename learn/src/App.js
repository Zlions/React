import React from 'react'
import { useStudent } from './myHook/useAllStudent'

export default function App() {
    const resp = useStudent(1, 10);
    if (!resp.findByPage) {
        return null
    }
    return (
        <div>
            <ul>
                {resp.findByPage.map(ele => <li key={ele.id}>{ele.name}</li>)}
            </ul>
        </div>
    )
}
