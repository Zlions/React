import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import RootRouter from './RootRouter'

export default function App() {
    return (
        <Router>
            <nav>
                <Link to="/">首页</Link>
                <Link to="/news">新闻页</Link>
            </nav>
            <div>
                {/* 匹配网站的顶级页面 */}
                <RootRouter></RootRouter>
            </div>
        </Router>
    )
}
