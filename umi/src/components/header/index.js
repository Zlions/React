import React from 'react'
import style from './index.css'
import { connect, history } from 'umi'

function index(props) {
    return (
        <>
            <span className={style.title}>学生管理系统</span>
            <div className={style.user}>
                <span>欢迎你 {props.loginId}</span>
                <button className={style.logout} onClick={() => {
                    props.onLogout && props.onLogout()
                }}>注销</button>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    loginId: state.loginUser
})

const mapDispatchToProps = dispatch => ({
    onLogout() {
        dispatch({
            type: 'loginUser/logout'
        })
        history.push('/login')
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)