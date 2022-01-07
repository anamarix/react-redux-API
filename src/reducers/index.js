import { combineReducers } from "redux";
import usersReducer from "./usersReducer.js";
import publicationsReducer from "./publicationsReducer.js";


export default combineReducers({
    usersReducer,
    publicationsReducer
});