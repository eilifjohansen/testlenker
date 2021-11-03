import * as React from "react";
import Layout from "../layouts/Layout";
import { Helmet } from "react-helmet";
import Content from "../content/lorem.mdx";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>/lorem</title>
      </Helmet>
      <Content />
    </Layout>
  );
};

export default IndexPage;
