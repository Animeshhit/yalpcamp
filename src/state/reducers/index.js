import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import LoadingReducer from "./LoadingReducer";

const reducers = combineReducers({
  user: authReducer,
  loading: LoadingReducer,
});

export default reducers;
