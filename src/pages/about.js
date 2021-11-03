import * as React from "react";
// import "./index.less";
import Layout from "../layouts/Layout";
import Lenkepanel from "nav-frontend-lenkepanel";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Content from "../content/hello.mdx";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Om oss</title>
      </Helmet>
      <Content />
      <Lenkepanel
        linkCreator={(props) => (
          <Link className="lenkepanel lenkepanel--border" to={props.href}>
            {props.children}
          </Link>
        )}
        href="/"
        tittelProps="normaltekst"
        border
      >
        Gå til forsiden
      </Lenkepanel>
    </Layout>
  );
};

export default IndexPage;
