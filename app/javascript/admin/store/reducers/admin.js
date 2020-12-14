import * as types from "../action_types";
import { getToken } from "@admin/utils/auth";

const defaultState = {
  name: '',
  avatar: '',
  api_access_token: getToken(),
};

export default function admin(state = defaultState, action) {
  switch (action.type) {
    case types.SET_ADMIN_API_ACCESS_TOKEN:
      return {
        ...state,
        api_access_token: action.token
      };
    case types.SET_ADMIN_INFO:
      return {
        ...state,
        name: action.name,
        avatar: action.avatar,
      };
    case types.RESET_ADMIN_INFO:
      return {};
    default:
      return state;
  };
};
