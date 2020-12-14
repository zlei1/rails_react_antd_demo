import React from "react";
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "antd";
import { getMenuFromList } from "@admin/utils";
import routeConfig from "@admin/router/config";
import siderMenu from "@admin/config/sider_menu";
const { Content } = Layout;

const getPageTitle = (siderMenu, pathname) => {
  let title = "后台管理系统";
  let item = getMenuFromList(siderMenu, "path", pathname);
  if (item) {
    title = `${item.title} - 后台管理系统`;
  }
  return title;
};

const LayoutContent = (props) => {
  const { location } = props;
  const { pathname } = location;

  return (
    <DocumentTitle title={getPageTitle(siderMenu, pathname)}>
      <Content style={{ height: "calc(100% - 100px)" }}>
        <Switch location={location}>
          <Redirect exact from="/" to="/dashboard" />

          {routeConfig.map((route) => {
            return (
              <Route
                component={route.component}
                key={route.path}
                path={route.path}
              />
            );
          })}

          <Redirect to="/404" />
        </Switch>
      </Content>
    </DocumentTitle>
  );
};

export default connect()(withRouter(LayoutContent));
