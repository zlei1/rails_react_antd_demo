import * as types from "../action_types";
import { getToken } from "@admin/utils/auth";

const defaultState = {
  name: '',
  avatar: '',
  api_access_token: getToken(),
};

export default function user(state = defaultState, action) {
  switch (action.type) {
    case types.SET_USER_API_ACCESS_TOKEN:
      return {
        ...state,
        api_access_token: action.token
      };
    case types.SET_USER_INFO:
      return {
        ...state,
        name: action.name,
        role: action.role,
      };
    case types.RESET_USER_INFO:
      return {};
    default:
      return state;
  }
}
