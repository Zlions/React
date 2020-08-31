import React, {useState, useEffect, useDebugValue} from 'react'


function useTest () {
    const [stu, ] = useState([])
    useDebugValue(stu)
    return stu;
}



export default function App() {
    useState(0);
    useEffect(() => {
        console.log("effect");
    }, [])
    useEffect(() => {
        console.log("abc");
    }, [])

    useTest();


    return (
        <div></div>
    )
}
