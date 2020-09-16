import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/header'
import Aside from '../components/aside'

export default function index(props) {
    if (props.location.pathname === '/login') {
        return props.children
    }
    return <Layout
        header={<Header />}
        main={props.children}
        aside={<Aside />}
    >
    </Layout>
}
