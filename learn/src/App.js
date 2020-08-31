import React, { useContext } from 'react'

const ctx = React.createContext();


// function Test() {
//     return <ctx.Consumer>
//         {value => <h1>{value}</h1>}
//     </ctx.Consumer>
// }

function Test() {

    const value = useContext(ctx);
    return <h1>
        {value}
    </h1>
}


export default function App() {
    return (
        <div>
            <ctx.Provider value="abc">
                <Test />
            </ctx.Provider>
        </div>
    )
}
