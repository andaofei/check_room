/**
 * Created by Administrator on 2018/1/5.
 */
import React,{Componet}from 'react';
import Button from 'antd-mobile';
import {connect} from 'react-redux'
import {add,remove,asyncRemove} from './redux'

//链接
@connect (
    state=>({
        num: state
    }),
    {add, remove, asyncRemove}
)

class App extends Componet{
    render() {
        const num = this.props.num;
        const add= this.props.add;
        const remove= this.props.remove;
        const asyncRemove=this.props.asyncRemove;
        return(
            <div className="App">
                <h1>现在有机关枪{num}把</h1>

                <Button onClick={add}>申请武器</Button>

                <Button onClick={remove}>上交武器</Button>

                <Button onClick={asyncRemove}>后交武器</Button>
            </div>
        )
    }
}

export default App;