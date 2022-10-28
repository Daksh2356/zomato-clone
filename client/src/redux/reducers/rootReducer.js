import { combineReducers } from "redux";
import auth from "./auth/auth.reducer";

// reducers or storage units
const rootReducer = combineReducers({ auth , });

export default rootReducer;
