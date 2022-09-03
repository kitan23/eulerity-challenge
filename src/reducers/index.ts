import { combineReducers } from "redux";
import { petReducer } from "./petReducer";
import { counterReducer } from "./counterReducer";

const reducers = combineReducers({
	petData: petReducer,
	counter: counterReducer,
});

export default reducers;
