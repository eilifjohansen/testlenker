import * as React from "react";
import "@navikt/ds-tokens";
import "@navikt/ds-css";
import { Link, Button } from "@navikt/ds-react";
// import "./index.less";
import Layout from "../layouts/Layout";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Om oss</title>
      </Helmet>
      <Link href="#">Dette er en tekstlenke</Link>
      <Button variant="primary">Hello</Button>
    </Layout>
  );
};

export default IndexPage;
