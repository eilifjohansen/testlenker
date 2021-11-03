import * as React from "react";
import Layout from "../../layouts/Layout";
import { Helmet } from "react-helmet";
import Content from "../../content/lorem-fnr.mdx";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>/lorem/FNR</title>
      </Helmet>
      <Content />
    </Layout>
  );
};

export default IndexPage;
