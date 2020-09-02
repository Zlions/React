import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import routeConfig from './routeConfig'


/**
 * 根据一个路由配置数组，便利改数组，得到一组Route组件
 * @param {*} routes 
 */
function getRoutes(routes, basePath) {
    if (!Array.isArray(routes)) {
        return;
    }
    const rs = routes.map((rt, i) => {
        const {children, path, component: Component, ...rest} = rt
        let newPath = `${basePath}${path}`
        newPath = newPath.replace(/\/\//g, '/')

        return <Route key={i} {...rest} 
        path={newPath}
            render={context => {
                return <Component {...context}>
                    {getRoutes(rt.children, newPath)}
                </Component>
            }}
        />
    })
    return rs
}

/**
 * 使用Route组件，根据不同的路径，渲染顶级页面
 */
export default function RootRouter() {
    console.log(getRoutes(routeConfig));
    return (
        <>
            {/* 返回一组Route */}
            {getRoutes(routeConfig, '')}
        </>
    )
}
