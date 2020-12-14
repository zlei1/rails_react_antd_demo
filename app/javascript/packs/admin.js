import React from "react";
import ReactDOM from "react-dom";
import App from "@admin/App";
import "@admin/mock";
import "@admin/styles/index.less";
import "antd/dist/antd.less";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById("app"));
})
