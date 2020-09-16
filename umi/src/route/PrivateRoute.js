import { connect, history } from 'umi'

function PrivateRoute(props) {
    const loginUser = props.loginUser
    if (loginUser) {
        return props.children
    } else {
        history.replace('/login')
        return null;
    }
}

const mapStateToProps = state => ({
    loginUser: state.loginUser
})


export default connect(mapStateToProps, null)(PrivateRoute)
