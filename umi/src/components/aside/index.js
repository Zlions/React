import React from 'react'
import style from './index.css'
import { NavLink } from 'umi'

export default function index(props) {
    return (
        <>
            <ul className={style.list}>
                <li><NavLink exact activeClassName={style.active} to="/student">学生列表</NavLink></li>
                <li><NavLink exact activeClassName={style.active} to="/student/add">添加学生</NavLink></li>
            </ul>
        </>
    )
}
