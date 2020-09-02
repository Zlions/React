import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function User({match}) {
    return <div>
        <h1>user 固定</h1>
        <p>
            <Link to={`${match.url}/update`}> user update</Link>
            <Link to={`${match.url}/pay`}> user pay</Link>
        </p>
        <div style={{
            width: 500,
            height: 500,
            background: 'lightblue',
            border: '2px solid',
            margin: '0 auto'
        }}>
            <Route path={`${match.url}/update`} component={UserUpdate} />
            <Route path={`${match.url}/pay`} component={UserPay} />
        </div>

    </div>
}

function UserUpdate() {
    return <h1>修改信息</h1>
}

function UserPay() {
    return <h1>用户充值</h1>
}

export default function App() {
    return <Router>
        <Route path="/u" component={User} />
    </Router>
}

