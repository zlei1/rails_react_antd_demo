import * as types from "../action_types";

const defaultState = {
  show_setting: true,
  show_sider_logo: true,
  fixed_layout_header: false,
  tags_view: true
};

export default function setting(state = defaultState, action) {
  switch (action.type) {
    case types.APP_SETTING_CHANGE:
      const { key, value } = action;
      if (state.hasOwnProperty(key)) {
        return {
          ...state,
          [key]: value,
        };
      }
      return state;
    default:
      return state;
  };
};
