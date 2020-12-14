import React, { useState } from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from "react-router-dom";
import { Form, Input, Button, message, Spin } from "antd";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { adminLogin } from "@admin/store/actions";
import "./index.less";

const Login = (props) => {
  const { api_access_token, adminLogin } = props;

  const [loading, setLoading] = useState(false);

  const handleLogin = (values) => {
    const { username, password } = values;

    setLoading(true);
    adminLogin(username, password)
      .then((response) => {
        message.success("登录成功");
      })
      .catch((error) => {
        setLoading(false);
        message.error(error.message);
      });
  };

  if (api_access_token) {
    return <Redirect to="/" />;
  } else {
    return (
      <DocumentTitle title={"管理员登入"}>
        <div className="login-container">
          <Spin spinning={loading} tip="登录中...">
            <Form
              name="normal-login"
              className="login-form"
              onFinish={handleLogin}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        </div>
      </DocumentTitle>
    )
  }
};

export default connect((state) => state.admin, {
  adminLogin
})(Login);
