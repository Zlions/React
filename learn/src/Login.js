import React from 'react'
import loginInfo from './loginInfo'
import qs from 'query-string'

export default function Login(props) {
    return (
        <div>
            <h1>登陆</h1>
            <button onClick={() => {
                loginInfo.login();


                // const query = qs.parse(props.location.search)

                // if(query.returnurl) {
                //     props.history.push(query.returnurl)
                //     return;
                // }



                // 2
                if (props.location.state) {
                    props.history.push(props.location.state)
                    return;
                }
                props.history.push('/')
            }}>login</button>
        </div>
    )
}
