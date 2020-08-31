import { useState, useEffect } from 'react'
import { getAllStudents, getStudents } from '../services/student'

export function useAllStudent() {
    const [student, setStudent] = useState([])
    useEffect(() => {
        (async () => {
            const stus = await getAllStudents();
            setStudent(stus)
        })()
    }, [])
    return student;
}

export function useStudent(page, limit) {
    const [student, setStudent] = useState([])
    useEffect(() => {
        (async () => {
            const stus = await getStudents();
            setStudent(stus)
        })()
    }, [page, limit])
    return student;
}