/**
 * Created by Administrator on 2018/1/30.
 */
import React from 'react'
import {connect} from 'react-redux';  //组合获取的数据
import {login} from './Auth.redux';  //组合获取的数据
import Footer from '../components/footer/index';
import {
    Redirect
} from 'react-router-dom';
//合并reducer
@connect(
    state => state.auth,
    {login}
)
class Auth extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        console.log('将挂载')
    }
    render () {
        console.log('被渲染')
        return (
            <div>
                {this.props.isAuth?<Redirect to="/dashboard/"></Redirect>:null}
                <h2>请登录</h2>
                <button onClick={this.props.login}>登录</button>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {
        console.log('被挂载')
    }

    componentWillReceiveProps() {
        console.log('重置')
    }
    shouldComponentUpdate(){
        console.log('准备更新')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('即将更新')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('已经更新')
    }
    componentWillUnmount() {
        console.log('将被销毁')
    }
    componentDidCatch() {
        console.log('错误处理')
    }
}
export default Auth;