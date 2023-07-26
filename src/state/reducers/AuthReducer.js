const initialState = {
  isAuth: false,
  user: null,
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: true,
        user: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuth: false,
        user: null,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isAuth: true,
        user: action.payload,
        error: null,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        isAuth: false,
        user: null,
        error: action.payload,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        isAuth: true,
        user: action.payload,
        error: null,
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        isAuth: false,
        user: null,
        error: action.payload,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
