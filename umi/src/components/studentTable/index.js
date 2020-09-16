import React from 'react'

export default function index(props) {
    const list = props.datas.map(it => (<tr key={it.id}>
        <td>{it.sNo}</td>
        <td>{it.name}</td>
        <td>{it.sex}</td>
    </tr>))
    return (
        <table>
            <thead>
                <tr>
                    <td>学号</td>
                    <td>姓名</td>
                    <td>性别</td>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
    )
}
