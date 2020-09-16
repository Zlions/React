import React, { useRef } from 'react'
import style from './index.css'

function LoginForm(props) {
    const loginId = useRef();
    const loginPwd = useRef();
    return (
        <div className={style.login_wrapper}>
            <p>
                <label className={style.user} htmlFor="">用户名: </label><input ref={loginId} type="text" />
            </p>
            <p>
                <label className={style.pwd} htmlFor="">密码: </label><input ref={loginPwd} type="password" />
            </p>
            <button className={style.login_btn} onClick={() => {
                const id = loginId.current.value;
                const pwd = loginPwd.current.value;
                props.onLogin && props.onLogin(id, pwd)
            }}>login</button>
        </div>
    )
}

export default LoginForm;