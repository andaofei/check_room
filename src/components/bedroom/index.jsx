import React from 'react'
import './style/index.less'
class bedroom extends React.Component{
    constructor(props) {
        super(props)
        // console.log(this.props)
    }
    note = (e) => {
        e.stopPropagation();
        console.log('记录')
    }
    audio = (e) => {
        e.stopPropagation();
        console.log('录音')
    }
    handClick = (e) => {
        e.stopPropagation();
        console.log('点击')
    }
    render(){
        return(
            <div  className='bedroom'>
                <div className="bed_item" onClick={this.handClick}>
                    <p className="bed_number">1-101</p>
                    <p className="bed_note">8小时前进行录音</p>
                    <div className="item_action">
                        <span>&nbsp;</span>
                        <p className="action_box">
                            <img  onClick={this.note} src={require("./images/write.png")} alt=""/>
                            <img  onClick={this.audio} src={require("./images/microphone.png")} alt=""/>
                        </p>
                    </div>
                </div>

                <div className="bed_item">
                    <p className="bed_number">1-101</p>
                    <p className="bed_note">8小时前进行录音</p>
                    <div className="item_action">
                        <span>&nbsp;</span>
                        <p className="action_box">
                            <img src={require("./images/write.png")} alt=""/>
                            <img src={require("./images/microphone.png")} alt=""/>
                        </p>
                    </div>
                </div>

                <div className="bed_item">
                    <p className="bed_number">1-101</p>
                    <p className="bed_note">8小时前进行录音</p>
                    <div className="item_action">
                        <span>&nbsp;</span>
                        <p className="action_box">
                            <img src={require("./images/write.png")} alt=""/>
                            <img src={require("./images/microphone.png")} alt=""/>
                        </p>
                    </div>
                </div>

                <div className="bed_item">
                    <p className="bed_number">1-101</p>
                    <p className="bed_note">8小时前进行录音</p>
                    <div className="item_action">
                        <span>&nbsp;</span>
                        <p className="action_box">
                            <img src={require("./images/write.png")} alt=""/>
                            <img src={require("./images/microphone.png")} alt=""/>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default bedroom