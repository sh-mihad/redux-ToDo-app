import filterReducer from "./filter/filterReducer";
import todoReducer from './todos/reducer'
import { combineReducers } from "redux";

const rootReduder =combineReducers({
    todos: todoReducer,
    filter : filterReducer
})

export default rootReduder