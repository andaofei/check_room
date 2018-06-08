import React from 'react'
import {Icon} from 'antd'
import './style/index.less'
class logHeader extends React.Component {
    back = () =>{
        window.history.go(-1)
    }
    render() {
        return (
            <div className='logHeader'>
                <p className="log_box">
                    <span onClick={this.back}>
                        <Icon type="arrow-left" />
                    </span>
                    <span>语音日志</span>
                    <span>&nbsp;</span>
                </p>
            </div>
        )
    }
}
export default logHeader