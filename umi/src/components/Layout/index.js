import React from 'react'
import style from './index.css'

export default function index(props) {
    return (
        <div>
            <div className={style.header}>
                {props.header}
            </div>
            <div className={style.aside}>
                {props.aside}
            </div>
            <div className={style.main} style={{
                boxSizing: 'border-box',
                padding: '10px'
            }}>
                {props.main}
            </div>
        </div>
    )
}
