import * as types from "../action_types";

const defaultState = {
  sider_collapsed: false,
  setting_panel_visible: false
};

export default function app(state = defaultState, action) {
  switch (action.type) {
    case types.APP_TOGGLE_SIDER_COLLAPSED:
      return {
        ...state,
        sider_collapsed: !state.sider_collapsed
      };
    case types.APP_TOGGLE_SETTING_PANEL:
      return {
        ...state,
        setting_panel_visible: !state.setting_panel_visible
      };
    default:
      return state;
  };
};
