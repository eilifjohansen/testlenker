import * as React from "react";
import Layout from "../../../layouts/Layout";
import { Helmet } from "react-helmet";
import Content from "../../../content/lorem-fnr-lorem.mdx";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>/lorem/FNR/lorem</title>
      </Helmet>
      <Content />
    </Layout>
  );
};

export default IndexPage;
