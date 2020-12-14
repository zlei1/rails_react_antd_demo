import React from "react";
import { connect } from "react-redux";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { toggleSider } from "@admin/store/actions";
import "./index.less";

const Hamburger = (props) => {
  const { sider_collapsed, toggleSider } = props;
  return (
    <div className="hamburger-container">
      { sider_collapsed ? <MenuUnfoldOutlined onClick={toggleSider} /> : <MenuFoldOutlined onClick={toggleSider} /> }
    </div>
  );
};

export default connect((state) => state.app, { toggleSider })(Hamburger);
