import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Menu, Dropdown, Modal, Layout, Avatar } from "antd";
import { Link } from "react-router-dom";
import { adminLogout, getAdminInfo } from "@admin/store/actions";
import FullScreen from "@admin/components/FullScreen";
import Hamburger from "@admin/components/Hamburger";
import Setting from "@admin/components/Setting";
import "./index.less";

const { Header } = Layout;

const LayoutHeader = (props) => {
  const {
    avatar,
    sider_collapsed,
    show_setting,
    fixed_layout_header,
    adminLogout,
    getAdminInfo
  } = props;

  useEffect(() => {
    if (avatar === '') {
      getAdminInfo()
    }
  });

  const handleLogout = () => {
    Modal.confirm({
      title: "退出登录",
      content: "确定要退出登录吗?",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        adminLogout();
      }
    });
  };

  const onClick = ({ key }) => {
    switch (key) {
      case "logout":
        handleLogout();
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="logout">退出登入</Menu.Item>
    </Menu>
  );

  const computedStyle = () => {
    let styles;
    if (fixed_layout_header) {
      if (sider_collapsed) {
        styles = {
          width: "calc(100% - 80px)",
        };
      } else {
        styles = {
          width: "calc(100% - 200px)",
        };
      }
    } else {
      styles = {
        width: "100%",
      };
    }
    return styles;
  };

  return (
    <>
      {fixed_layout_header ? <Header /> : null}

      <Header
        style={computedStyle()}
        className={fixed_layout_header ? "fix-header" : ""}
      >
        <Hamburger />
        <div className="right-menu">
          <FullScreen />
          { show_setting ? <Setting /> : null }
          <div className="dropdown-wrap">
            <Dropdown overlay={menu}>
              <div>
                <Avatar shape="square" size="medium" src={avatar} />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.setting,
    ...state.admin
  };
};

export default connect(mapStateToProps, { adminLogout, getAdminInfo })(LayoutHeader);
