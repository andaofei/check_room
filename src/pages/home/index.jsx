/**
 * Created by Administrator on 2018/1/30.
 */
import React from 'react'
import {
    Redirect
} from 'react-router-dom';
import {logout} from '../login/Auth.redux';  //组合获取的数据
import {connect} from 'react-redux';
import Header from '../../components/header/index';
import BedRoom from '../../components/bedroom/index';
import GlobalAudio from '../../components/globalAudio/index';
import './style/index.less'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
@connect(
    state => state.auth,
    {logout}
)
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    tab = (key) => {
        console.log(key)
    }
    handleEmail = (val) => {
            console.log(0)
     }
    render() {
        const redirectToLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div className="home">
                <Header/>
                {/*{this.props.isAuth? <button onClick={this.props.logout}>注销</button>:null}*/}
                <div className="wrapper">
                    {/*左侧列表*/}
                    <div className="left_box">
                        <div className="left_title">
                            <p className="left_text">呼吸与危重症科</p>
                        </div>
                        <div className="left_scroll">
                            <div>
                                <Menu mode="inline"
                                    openKeys={this.state.openKeys}
                                    onOpenChange={this.onOpenChange}
                                    onClick={this.tab}
                                    style={{ width: 180 }}>
                                    <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
                                        <Menu.Item key="1">Option 1</Menu.Item>
                                        <Menu.Item key="2">Option 2</Menu.Item>
                                        <Menu.Item key="3">Option 3</Menu.Item>
                                        <Menu.Item key="4">Option 4</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
                                        <Menu.Item key="5">Option 5</Menu.Item>
                                        <Menu.Item key="6">Option 6</Menu.Item>
                                        <Menu.Item key="7">Option 7</Menu.Item>
                                        <Menu.Item key="8">Option 8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
                                        <Menu.Item key="9">Option 9</Menu.Item>
                                        <Menu.Item key="10">Option 10</Menu.Item>
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    {/*右侧病床*/}
                    <div className="right_box">
                        <BedRoom/>
                    </div>
                    {/*录音*/}
                    <GlobalAudio handleEmail={this.handleEmail.bind(this)} checked={this.props}/>
                </div>
            </div>
        );
    return this.props.isAuth?app:redirectToLogin;
    };
}
export default Dashboard;