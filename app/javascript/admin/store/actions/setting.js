import * as types from "../action_types";

export const changeSetting = (data) => {
  return {
    type: types.APP_SETTING_CHANGE,
    ...data,
  };
};
