import LoginForm from '../LoginForm'
import { connect } from 'umi'
import { history } from 'umi'


const mapDispatchToProps = dispatch => ({
    async onLogin(loginId, loginPwd) {
        const result = await dispatch({
            type: 'loginUser/login',
            payload: {
                loginId,
                loginPwd
            }
        })

        if (result) {
            history.push('/')
        } else {
            window.alert('用户名或密码错误')
        }
    }
})


export default connect(null, mapDispatchToProps)(LoginForm)