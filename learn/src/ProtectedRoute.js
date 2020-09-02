import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import loginInfo from './loginInfo'

export default function ProtectedRoute({ component: Component, children, render, ...rest }) {
    return <Route {...rest} render={context => {
        if (loginInfo.isLogin) {
            return <Component />
        } else {

            // return <Redirect to={{
            //     pathname: '/login',
            //     search: '?returnurl=' + context.location.pathname
            // }} />

            return <Redirect to={{
                pathname: '/login',
                state: context.location.pathname
            }} />
        }
    }} />
}
