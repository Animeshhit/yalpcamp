const LoadingReducer = (state = true, action) => {
  switch (action.type) {
    case "TRUE":
      return true;
    case "FALSE":
      return false;
    default:
      return state;
  }
};

export default LoadingReducer;
