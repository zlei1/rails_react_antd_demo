import * as types from "../action_types";

const defaultState = {
  tags: []
};

export default function tags(state = defaultState, action) {
  switch (action.type) {
    case types.ADD_TAG:
      const tag = action.tag;
      if (state.tags.includes(tag)) {
        return state;
      } else {
        return {
          ...state,
          tags: [...state.tags, tag]
        }
      }
    case types.DELETE_TAG:
      return {
        ...state,
        tags: [...state.tags.filter((item) => item !== action.tag)],
      };
    case types.EMPTY_TAGS:
      return {
        ...state,
        tags: [
          ...state.tags.filter((item) => item.path === "/dashboard"),
        ]
      };
    case types.CLOSE_OTHER_TAGS:
      return {
        ...state,
        tags: [
          ...state.tags.filter((item) => item.path === "/dashboard" || item === action.tag),
        ]
      };
    default:
      return state;
  }
}
