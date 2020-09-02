import Home from './Home'
import News from './News'
import NewsDetail from './NewsDetail'
import NewsHome from './NewsHome'
import NewsSearch from './NewsSearch'

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/news',
        component: News,
        children: [
            {path: '/', exact: true, component: NewsHome},
            {path: '/detail', exact: true, component: NewsDetail},
            {path: '/search', exact: true, component: NewsSearch},
        ]
    }
]