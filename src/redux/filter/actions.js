import {COLORCHANGED,STATUSCHNAGED} from './actioinTypes'

export const statusChageg =(status)=>{
    return {
        type : STATUSCHNAGED,
        payload : status
    }

}
export const colorChanged =(color,changeType)=>{
    return {
        type : COLORCHANGED,
        payload :{
            color,changeType
        }
    }

}