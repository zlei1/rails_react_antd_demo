import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import LayoutSider from "./components/Sider";
import Content from "./components/Content";
import RightPanel from "./components/RightPanel";
import LayoutHeader from "./components/Header";
import Tags from "./components/TagsView";

const Main = (props) => {
  const { tags_view } = props;

  return (
    <Layout>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        {tags_view ? <Tags /> : null}
        <Content />
        <RightPanel />
      </Layout>
    </Layout>
  );
};

export default connect((state) => state.setting)(Main);
