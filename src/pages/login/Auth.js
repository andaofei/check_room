/**
 * Created by Administrator on 2018/1/30.
 */
import React from 'react'
import { Input, Icon, Button } from 'antd';
import {connect} from 'react-redux';  //组合获取的数据
import {login} from './Auth.redux';  //组合获取的数据
import Footer from '../../components/footer/index';
import './style/index.less'
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
        this.state = {
            userName: '',
            passWord:''
        };
        this.handleLogin = this.handleLogin.bind(this)
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    passEmpty = () => {
        this.passWordInput.focus();
        this.setState({ passWord: '' });
    }

    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    onChangePassWord = (e) => {
        this.setState({ passWord: e.target.value });
    }

    handleLogin(){
        this.props.login(this.state)
    }

    handleChange=(key,val)=>{
        this.setState({
            [key]:val
        })
    }

    render () {
        const { userName,passWord} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const suffix2 = passWord ? <Icon type="close-circle" onClick={this.passEmpty} /> : null;
        return (
            <div className="login_wrapper">
                {this.props.isAuth?<Redirect to="/dashboard/"></Redirect>:null}
                <div className="login_box">
                    <div className="title">
                        清影科技-智慧医疗领跑者
                    </div>
                    <div className="login_container">
                        <div className="login_form">
                            {this.props.msg?<p className='error_msg'>{this.props.msg}</p>:null}
                            <div className="user_name">
                                <Input
                                    placeholder="Username"
                                    size="large"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={suffix}
                                    value={userName}
                                    onChange={this.onChangeUserName}
                                    ref={node => this.userNameInput = node}
                                />
                            </div>
                            <div className="pass_word">
                                <Input
                                    placeholder="Password"
                                    size="large"
                                    type="password"
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={suffix2}
                                    value={passWord}
                                    onChange={this.onChangePassWord}
                                    onPressEnter={this.props.login}
                                    ref={node => this.passWordInput = node}
                                />
                            </div>
                            <div className="action">
                                <Button type="primary"  size="large" className="btn" onClick={this.handleLogin}>登录</Button>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Auth;