import React from 'react'
import {Menu,Dropdown,Icon} from 'antd'
import { withRouter} from 'react-router-dom';
import './style/index.less'
import {logout} from '../../pages/login/Auth.redux';  //组合获取的数据
import {connect} from 'react-redux';
import PropTypes from "prop-types";
@connect(
    state => state.auth,
    {logout}
)
class header extends React.Component{
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props) {
        super(props)
        // console.log(this.props)
    }
    log = () => {
        console.log(this.context);
        this.context.router.history.push("/audiolog");
        // location.pathname.startsWith('/audiolog')
        // this.context.router.history.push('/audiolog')
    }
    render(){
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <span onClick={this.props.logout}>注销</span>
                </Menu.Item>
            </Menu>
        );
        return(
            <div  className='header'>
                <div className="header_left"><p>清影医疗-查房系统</p></div>
                <div className="header_right">
                    <p className="audio_log" onClick={this.log}>
                        <span className="daily_box">
                            <i>&nbsp;</i>
                            <img className="daily" src={require("./images/daily.png")} alt=""/>
                             <i>&nbsp;</i>
                        </span>
                        <span className="audio_text">语音日志</span>
                    </p>
                    <div className="user_infor">
                        <p className="avatar_box">
                            <span>&nbsp;</span>
                            <img className="avatar" src={require("./images/few.jpg")} alt=""/>
                            <span>&nbsp;</span>
                        </p>
                         <p className="logout_box">
                             <span className="name">张三</span>
                             <span className="logout">
                                 <i>&nbsp;</i>
                                 <Dropdown overlay={menu} trigger={['click']}>
                                    <span className="ant-dropdown-link" href="#">
                                     <Icon type="caret-down" />
                                    </span>
                                  </Dropdown>
                                  <i>&nbsp;</i>
                             </span>
                         </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default header