/**
 * Created by Administrator on 2018/1/30.
 */
import React from 'react'
import {
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import {logout} from './Auth.redux';  //组合获取的数据
import {connect} from 'react-redux';
import App from '../App';
import Header from '../components/header/index'
// class Test extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//
//     render() {
//         console.log(this.props)
//         return <h2>测试组件{this.props.match.params.location}</h2>
//     }
// }
function Er() {
    return <h2>123123</h2>
}
function San() {
    return <h2>321321</h2>
}
@connect(
    state => state.auth,
    {logout}
)
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
    }

    render() {
        const redirectToLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <Header/>
                {this.props.isAuth? <button onClick={this.props.logout}>注销</button>:null}
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/`}>方法1</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/er`}>方法2</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/san`}>方法3</Link>
                    </li>
                </ul>
                {/*只渲染命中的Route*/}
                {/*<Redirect to="san"></Redirect>*/}
                <Route path={`${this.props.match.url}/`} exact component={App}></Route>
                {/*<Route path="/:location" component={Test}></Route>*/}
                <Route path={`${this.props.match.url}/er`} component={Er}></Route>
                <Route path={`${this.props.match.url}/san`} component={San}></Route>
            </div>
        );
        return this.props.isAuth?app:redirectToLogin;

    };
}
export default Dashboard;