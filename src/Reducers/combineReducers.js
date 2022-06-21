import { combineReducers } from "redux";
import Reducer_Load from "./Load";
const combineReducer = combineReducers({
    loading:Reducer_Load
})

export default combineReducer