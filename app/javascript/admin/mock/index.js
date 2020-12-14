import Mock from "mockjs";
import adminAPI from "./admin";

Mock.mock(/api\/admin\/sessions/, 'post', adminAPI.login);
Mock.mock(/\/api\/admin\/sessions\/profile/, 'get', adminAPI.getInfo);

export default Mock;
