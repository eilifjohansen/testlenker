import * as React from "react";
import Layout from "../layouts/Layout";
import { Helmet } from "react-helmet";
import Content from "../content/index.mdx";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Testlenker</title>
      </Helmet>
      <Content />
    </Layout>
  );
};

export default IndexPage;
