import * as types from "../action_types";
import { adminLoginApi, getAdminInfoApi } from '@admin/api/admin';
import { setToken, removeToken } from "@admin/utils/auth";

export const adminLogin = (username, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    adminLoginApi({ username: username.trim(), password: password })
      .then((response) => {
        const { data } = response;
        const { token, name, avatar } = data;
        dispatch(setAdminToken(token));
        dispatch(setAdminInfo({name, avatar}));
        setToken(token);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAdminInfo = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    getAdminInfoApi()
      .then((response) => {
        const { data } = response;
        const { name, avatar } = data;
        dispatch(setAdminInfo({name, avatar}));
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const adminLogout = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(resetAdminInfo());
    removeToken();
    resolve();
  });
};

export const setAdminToken = (token) => {
  return {
    type: types.SET_ADMIN_API_ACCESS_TOKEN,
    token,
  };
};

export const setAdminInfo = (userInfo) => {
  return {
    type: types.SET_ADMIN_INFO,
    ...userInfo,
  };
};

export const resetAdminInfo = () => {
  return {
    type: types.RESET_ADMIN_INFO,
  };
};
