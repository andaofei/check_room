/**
 * Created by Administrator on 2018/1/30.
 */
import axios from 'axios';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ERROR_MSG = 'ERROR_MSG';
const LOGIN_SUCESS = 'LOGIN_SUCESS';
const initState={
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    type:''
}
export function auth(state=initState,action) {
    // console.log(state);
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth:true};
        case LOGIN_SUCESS:
            return {...state, msg:'',redirectTo:'/dashboard',isAuth:true,...action.payload}
        case LOGOUT:
            return {...state, isAuth:false};
        case ERROR_MSG:
            return {...state, isAuth:false, msg:action.msg}
        default:
            return state
    }
}

function loginSuccess(data){
    return { type:LOGIN_SUCESS , payload:data}
}

//action
// export function login() {
//     return{type:LOGIN}
// }
function errorMsg(msg){
    return { msg, type:ERROR_MSG }
}

export function login({userName,passWord}){
    if (!userName||!passWord) {
        return errorMsg('用户密码必须输入')
    }
    return dispatch=>{
        axios.post('/user/login',{userName,passWord})
            .then(res=>{
                if (res.status===200&&res.data.code===0) {
                    dispatch(loginSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
            .catch(req=>{
                dispatch(loginSuccess(req))
                console.log(req)
            })
    }
}
export function logout() {
    return{type:LOGOUT}
}