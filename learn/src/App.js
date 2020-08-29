import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// /a
function A() {
    return <h1>A</h1>
}

// /b
function B() {
    return <h1>B</h1>
}

// /c
function C() {
    return <h1>C</h1>
}

export default function App() {

    return (
        <Router>
            {/* <Switch>
                <Route path="/a" component={A} />
                <Route path="/b" component={B} />
                <Route path="/a" component={C} />
            </Switch> */}


            {/* 必定显，忽略component */}
            <Route path="/a" component={A}>
                {/* <p>123</p> */}

                {/* {() => {
                    return <div>
                        dsfdf
                    </div>
                }} */}
            </Route>
            <Route path="/b" component={B} />
            <Route path="/a" component={C} />

                {/* 套上Switch后 就不会渲染Route中的children */}
            <Switch>
                <Route path="/a" component={A}>
                    {/* <p>123</p> */}

                    {() => {
                        return <div>
                            dsfdf
                    </div>
                    }}
                </Route>
                <Route path="/b" component={B} />
                <Route path="/a" component={C} />
            </Switch>
        </Router>
    )
}
