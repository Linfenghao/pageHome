import * as user from './action-typs'

let userState = {
    user:"林丰浩",
    age:"22",
    sex:"男"
}

export default (state = userState,action = {})=>{
    switch(action.type){
        case user.USER_MESSAGE:
            return{
                ...state,
                message:action.message
            }
        case user.MODIFY_MESSAGE:
            return{
                ...state,...{[action.index]:action.value}
            }
        default:
            return state
    }
}