import * as types from "../action_types";

export const toggleSider = () => {
  return {
    type: types.APP_TOGGLE_SIDER_COLLAPSED
  };
};

export const toggleSettingPanel = () => {
  return {
    type: types.APP_TOGGLE_SETTING_PANEL
  };
};
