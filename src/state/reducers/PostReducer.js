const initialState = {
  isCompleted: false,
  posts: null,
  error: null,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST_SUCCESS":
      return {
        ...state,
        isCompleted: true,
        posts: action.payload,
        error: null,
      };
    case "GET_POST_FAILED":
      return {
        ...state,
        isCompleted: false,
        posts: [],
        error: action.payload,
      };
    case "SEARCH_POST_SUCCESS":
      return {
        ...state,
        isCompleted: true,
        posts: action.payload,
        error: null,
      };
    case "SEARCH_POST_FAILED":
      return {
        ...state,
        isCompleted: false,
        posts: [],
        error: action.payload,
      };
    case "SET_POST":
      return initialState;
    default:
      return state;
  }
};

export default PostReducer;
