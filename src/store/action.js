import * as user from './action-typs'

export const userMessage = (message) =>{
    return {
        type:user.USER_MESSAGE,message
    }
}

export const modifyMessage = (index,value)=>{
    return {
        type:user.MODIFY_MESSAGE,index,value
    }
}