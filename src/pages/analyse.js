import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Lenke from "nav-frontend-lenker";
import Panel from "nav-frontend-paneler";
import { Input } from "nav-frontend-skjema";
import { Hovedknapp } from "nav-frontend-knapper";
import { Systemtittel } from "nav-frontend-typografi";
import { Normaltekst } from "nav-frontend-typografi";
import { getInfoAsync } from "../api/api.js";
import "../assets/css/Layout.less";

export default function Home() {
  // <----------- This state stores urls -------------------->
  const [url, setUrl] = useState("");
  // <----------------     This state stores the content and updates itself when url changes -------------------------------->
  const [state, setState] = useState("");

  const [pending, setPending] = useState("");

  //<--------------- This function is defined in src/api/api.js and called here to update data according to url ----------------->
  useEffect(() => {
    if (url === "") {
      // console.log("Enter a Url")
    } else {
      const data = getInfoAsync(url);
      console.log(data);
      data.then((data) => {
        return setState(data);
      });
    }
  }, [url]);

  //<----------------- This handles data when analyze button clicked ------------------>

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue1 = e.target.inputValue.value;
    // console.log(inputValue1)
    setUrl(inputValue1);
    setPending("Pending");
  };

  const clearState = (e) => {
    e.preventDefault();
    setState("");
    setPending("");
  };

  return (
    <Layout className="App">
      <header className="App-header">
        <div className="section">
          {state === "" && pending === "" && (
            <Panel border>
              <div className="innerpanel">
                <Systemtittel className="innholdstittel">
                  Er nettsiden din tilgjengelig for alle?
                </Systemtittel>
                <Normaltekst className="avsnitt">
                  Gi nettsiden din en øyeblikkelig universell utforming sjekk.
                </Normaltekst>
                <form onSubmit={handleSubmit}>
                  <Input name="inputValue" label="Nettsideadresse" />
                  <Hovedknapp
                    name="submit"
                    type="submit"
                    className="hovedknapp"
                  >
                    Analyser
                  </Hovedknapp>
                </form>
                <Normaltekst className="drevetav">
                  Drevet av:{" "}
                  <Lenke href="https://pa11y.org/">
                    <span>Pa11y</span>
                  </Lenke>
                </Normaltekst>
              </div>
            </Panel>
          )}

          {pending !== "" && state === "" && (
            <Panel className="resultpanel" border>
              <div className="innerpanel">
                <Systemtittel className="innholdstittel">
                  Analyserer...
                </Systemtittel>
                <Normaltekst className="avsnitt">
                  Resultatet er snart klart
                </Normaltekst>
              </div>
            </Panel>
          )}

          {state !== "" && (
            <Panel className="resultpanel" border>
              <div className="innerpanel">
                <Systemtittel className="innholdstittel">
                  Resultater
                </Systemtittel>
                <Normaltekst className="avsnitt">{state}</Normaltekst>
                <Hovedknapp onClick={clearState} className="">
                  Analyser en annen side
                </Hovedknapp>
                <Normaltekst className="drevetav">
                  Drevet av:{" "}
                  <Lenke href="https://pa11y.org/">
                    <span>Pa11y</span>
                  </Lenke>
                </Normaltekst>
              </div>
            </Panel>
          )}
        </div>
      </header>
    </Layout>
  );
}
