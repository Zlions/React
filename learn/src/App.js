import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Personal from './Personal'
import ProtectedRoute from './ProtectedRoute'


export default function App() {
    return <Router>
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/login">登陆</Link></li>
            <li><Link to="/personal">个人中心</Link></li>
        </ul>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/personal" component={Personal} />

            {/* render和children的区别：render是匹配后才会运行，children无论是否匹配都会运行 */}
            {/* <Route path="/personal" render={() => {
                return <h2>fdsfsf</h2>
            }} /> */}
        </Switch>
    </Router>
}
