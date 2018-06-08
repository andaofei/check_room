/**
 * Created by Administrator on 2018/1/30.
 */
// 合并所有的reducer 并返回
import {combineReducers} from 'redux';
import {counter} from '../redux/index';
// import {auth} from '../login/Auth.redux';
import {auth} from '../pages/login/Auth.redux';
export default combineReducers({counter, auth})