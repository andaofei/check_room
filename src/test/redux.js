/**
 * Created by Administrator on 2018/1/5.
 */
//建一个reducer
const Add_Gun = '加机关枪';
const Remove_Gun = '减机关枪';

export function counter(state=110,action) {
    switch(action.type) {
        case Add_Gun:
            return state+1;
        case Remove_Gun:
            return state-1;
        default:
            return state;
    }
}
export  function add() {
    return {
        type:Add_Gun
    }
}

export function remove() {
    return{
        type:Remove_Gun
    }
}

export function asyncRemove() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add())
        },1000)
    }
}