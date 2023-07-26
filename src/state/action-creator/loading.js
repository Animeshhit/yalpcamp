export const isLoading = (loadingStatus) => {
  return (dispatch) => {
    if (loadingStatus) {
      dispatch({
        type: "TRUE",
      });
    } else {
      dispatch({
        type: "FALSE",
      });
    }
  };
};
