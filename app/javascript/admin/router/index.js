import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "@admin/layout";
import Login from "@admin/views/login";

class Router extends React.Component {
  render() {
    const { api_access_token } = this.props;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              if (!api_access_token) {
                return <Redirect to="/login" />;
              } else {
                return <Layout />;
              }
            }}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default connect((state) => state.admin)(Router);
