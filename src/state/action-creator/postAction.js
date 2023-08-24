import axios from "axios";
import { BaseUrl } from "../../config";

export const getPosts = () => async (dispatch) => {
  try {
    const GET_URL = `${BaseUrl}/api/v1/posts`;
    const response = await axios.get(GET_URL);
    dispatch({
      type: "GET_POST_SUCCESS",
      payload: response.data.posts,
    });
    return response.data.posts.reverse();
  } catch (err) {
    let errMessage = err.response ? err.response.data.message : err.message;
    dispatch({
      type: "GET_POST_FAILED",
      payload: errMessage,
    });
    throw new Error(errMessage);
  }
};

export const searchPosts = (keyword) => async (dispatch) => {
  try {
    const GET_URL = `${BaseUrl}/api/v1/post/search?q=${keyword}`;
    const response = await axios.get(GET_URL);
    dispatch({
      type: "SEARCH_POST_SUCCESS",
      payload: response.data.posts,
    });
    return response.data.posts;
  } catch (err) {
    let errMessage = err.response ? err.response.data.message : err.message;
    dispatch({
      type: "SEARCH_POST_FAILED",
      payload: errMessage,
    });
    throw new Error(errMessage);
  }
};

export const setDefault = () => {
  return (dispatch) => {
    dispatch({
      type: "SET_POST",
      payload: null,
    });
  };
};
