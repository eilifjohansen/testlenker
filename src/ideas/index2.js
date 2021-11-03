import * as React from "react";
// import "./index.less";
import Layout from "../layouts/Layout";
import Lenkepanel from "nav-frontend-lenkepanel";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Innholdstittel } from "nav-frontend-typografi";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Forsiden</title>
      </Helmet>
      <Innholdstittel style={{ marginBottom: "30px" }}>
        Berg-Hansen
      </Innholdstittel>
      <Lenkepanel
        linkCreator={(props) => (
          <Link className="lenkepanel lenkepanel--border" to={props.href}>
            {props.children}
          </Link>
        )}
        href="/about"
        tittelProps="normaltekst"
        border
      >
        Gå til om oss
      </Lenkepanel>
    </Layout>
  );
};

export default IndexPage;
