import { reducer } from "./Reducers"
import {combineReducers} from "redux";


export const rootReducer=combineReducers({
    products:reducer
})