import { combineReducers } from "redux";
import admin from "./admin";
import app from "./app";
import setting from "./setting";
import tags from "./tags";

export default combineReducers({
  app,
  admin,
  setting,
  tags
});
