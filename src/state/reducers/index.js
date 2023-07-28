import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import LoadingReducer from "./LoadingReducer";
import PostReducer from "./PostReducer";

const reducers = combineReducers({
  user: authReducer,
  loading: LoadingReducer,
  posts: PostReducer,
});

export default reducers;
