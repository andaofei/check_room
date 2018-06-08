import React, {Component} from 'react';
// import {Button} from 'antd-mobile';
import Button from 'antd/lib/button';
import {connect} from 'react-redux';  //组合获取的数据
import {addGUN, removeGUN, addGunAsync} from './redux/index';
import './App.less';
// const mapStatetoProps=(state)=>{
//     return {num: state}
// }
// const actionCreators = {addGUN, removeGUN, addGunAsync}

// App = connect(mapStatetoProps, actionCreators)(App)
@connect(
    // 属性
    state=>({num:state.counter}),
    // 方法
    {addGUN, removeGUN, addGunAsync}
)

class App extends Component {
    render() {
        // console.log(this.props);
        const num = this.props.num;
        const addGUN = this.props.addGUN;
        const removeGUN = this.props.removeGUN;
        const addGunAsync = this.props.addGunAsync;
        return (
            <div className="App">

                <h1>现在有机关枪{num}把</h1>

                <Button type="primary" onClick={addGUN}>申请武器</Button>

                <Button type="primary" onClick={removeGUN}>上交武器</Button>

                <Button type="primary" onClick={addGunAsync}>后交武器</Button>
            </div>
        );
    }
}

export default App;
