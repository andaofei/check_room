import React from 'react'
import './styles/index.less'
class globalAudio extends React.Component{
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    global = () => {
        console.log(this.props)
        this.props.handleEmail()
    }
    render(){
        return(
            <div  className='global'>
                <img className="global_img" onClick={this.global} src={require('./images/allmicro.png')} alt=""/>
            </div>
        )
    }
}
export default globalAudio