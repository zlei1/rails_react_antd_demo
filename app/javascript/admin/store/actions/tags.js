import * as types from "../action_types";

export const addTag = (tag) => {
  return {
    type: types.ADD_TAG,
    tag
  };
};

export const deleteTag = (tag) => {
  return {
    type: types.DELETE_TAG,
    tag
  };
};

export const emptyTags = () => {
  return {
    type: types.EMPTY_TAGS
  };
};

export const closeOtherTags = (tag) => {
  return {
    type: types.CLOSE_OTHER_TAGS,
    tag
  };
};
