import { isLoading } from "./loading";
import store from "../store";
import axios from "axios";
import { BaseUrl, Token } from "../../config";

export const LoginAction = (user) => async (dispatch) => {
  store.dispatch(isLoading(true));
  try {
    const POST_URL = `${BaseUrl}/api/v1/login`;
    const response = await axios.post(POST_URL, user);
    localStorage.setItem(Token, response.data.token);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data.user,
    });
    setTimeout(() => {
      store.dispatch(isLoading(false));
    }, 300);
    return response.data.user;
  } catch (err) {
    let errMessage = err.response ? err.response.data.message : err.message;
    dispatch({
      type: "LOGIN_FAILURE",
      payload: errMessage,
    });
    setTimeout(() => {
      store.dispatch(isLoading(false));
    }, 300);
    throw new Error(errMessage);
  }
};

export const RegisterAction = (user) => async (dispatch) => {
  store.dispatch(isLoading(true));
  try {
    const POST_URL = `${BaseUrl}/api/v1/register`;
    const response = await axios.post(POST_URL, user);
    localStorage.setItem(Token, response.data.token);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: response.data.user,
    });
    setTimeout(() => {
      store.dispatch(isLoading(false));
    }, 300);
    return response.data.user;
  } catch (err) {
    let errMessage = err.response ? err.response.data.message : err.message;
    dispatch({
      type: "REGISTER_FAILURE",
      payload: errMessage,
    });
    setTimeout(() => {
      store.dispatch(isLoading(false));
    }, 300);
    throw new Error(errMessage);
  }
};

export const LogOut = () => {
  return (dispatch) => {
    store.dispatch(isLoading(true));
    setTimeout(() => {
      localStorage.removeItem(Token);
      dispatch({
        type: "LOGOUT",
      });
    }, 200);
    setTimeout(() => {
      store.dispatch(isLoading(false));
    }, 300);
  };
};

export const getUser = () => async (dispatch) => {
  store.dispatch(isLoading(true));
  try {
    let token = localStorage.getItem(Token);
    const GET_USER = `${BaseUrl}/api/v1/user?api_key=${token}`;
    const response = await axios.get(GET_USER);
    dispatch({
      type: "GET_USER_SUCCESS",
      payload: response.data.user.user,
    });
    setTimeout(() => {
      store.dispatch(isLoading(false));
    }, 300);
    return response.data.user;
  } catch (err) {
    let errMessage = err.response ? err.response.data.message : err.message;
    dispatch({
      type: "GET_USER_FAILURE",
      payload: errMessage,
    });
    setTimeout(() => {
      store.dispatch(isLoading(false));
    }, 300);
    throw new Error(errMessage);
  }
};
