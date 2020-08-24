import React, { Component } from 'react'
import ReactDOM from 'react-dom';


export default class Comp extends Component {
  state = {
    n: 0
  }
  handleClick = () => {
    // this.setState({
    //   n: n+ 1
    // }, () => {
    //   // 状态完成改变之后触发，该回调运行在render之后
    //   console.log(thsi.state.n);
    // })

    // 改变多次状态
    this.setState((prev) => {
      // 参数prev表示当前的状态
      // 该函数的返回结果会混合掉之前的状态
      // 该函数是异步执行的
      return {
        n: prev.n + 1
      }
    })
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.n}
        </h1>
        <p>
          <button onClick={this.handleClick}></button>
        </p>
      </div>
    )
  }
}


ReactDOM.render(<Comp />, document.getElementById('root'));

