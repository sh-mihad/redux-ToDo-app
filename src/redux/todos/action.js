import {ADDED,TOGGLED,DELETED,COLORSELECTED,COMPLETED,CLEARCOMPLETED,} from './actionTypes'

export const added =(todoText)=>{
    return{
        type: ADDED,
        payload : todoText 
    }
}
export const toggled =(todoId)=>{
    return{
        type: TOGGLED,

    }
}
export const colorSelcted =(todoId,color)=>{
    return{
        type: COLORSELECTED,
        payload:{
            todoId,color
        }

    }
}
export const deletd =(todoId)=>{
    return{
        type: DELETED,
        payload:todoId

    }
}
export const completed =()=>{
    return{
        type: COMPLETED,

    }
}
export const clearCompleted =()=>{
    return{
        type: CLEARCOMPLETED,

    }
}

