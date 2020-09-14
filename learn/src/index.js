import dva from 'dva'
import counterModel from './model/counter'
import { createBrowserHistory } from 'history'
import routerConfig from './routerConfig'

const history = createBrowserHistory()

// 得到一个dva对象
const app = dva({
    history
});

// 在启动前定义模型
app.model(counterModel)

// 设置跟路由
app.router(routerConfig)

app.start('#root');