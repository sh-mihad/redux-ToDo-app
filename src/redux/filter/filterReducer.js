import initailState from "./initialState";
import{COLORCHANGED,STATUSCHNAGED} from './actioinTypes'

const filterReducer = (state=initailState,action)=>{
    switch (action.type) {
        case STATUSCHNAGED:
            return{
                ...state,
                status:action.payload
            }
        case COLORCHANGED:
            const {changeType,color} = action.payload
            switch (changeType) {
                case "add":
                    return{
                        ...state,
                        colors : [
                            ...state.colors,
                            color
                        ]
                    }
                    
                    case "removed":
                    return{
                        ...state,
                        colors : [
                            ...state.colors.filter(existingColor=>existingColor !== color)
                            
                        ]
                    }
            
                default:
                    return state;
            }
            
          
            
           
    
        default:
          return state;
    }
}

export default filterReducer