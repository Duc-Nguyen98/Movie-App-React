/*==========================================
Title:  move-app-react
Date:   18-Oct-2021
==========================================*/
import React from "react";
import ReactDOM from "react-dom";

import "./full-page-loader.scss";

const PageLoading = () => {
  return (
    <section>
      <div className="loader">
        <span style={{ "--i": 1 }} />
        <span style={{ "--i": 2 }} />
        <span style={{ "--i": 3 }} />
        <span style={{ "--i": 4 }} />
        <span style={{ "--i": 5 }} />
        <span style={{ "--i": 6 }} />
        <span style={{ "--i": 7 }} />
        <span style={{ "--i": 8 }} />
        <span style={{ "--i": 9 }} />
        <span style={{ "--i": 10 }} />
        <span style={{ "--i": 11 }} />
        <span style={{ "--i": 12 }} />
        <span style={{ "--i": 13 }} />
        <span style={{ "--i": 14 }} />
        <span style={{ "--i": 15 }} />
        <span style={{ "--i": 16 }} />
        <span style={{ "--i": 17 }} />
        <span style={{ "--i": 18 }} />
        <span style={{ "--i": 19 }} />
        <span style={{ "--i": 20 }} />
        <div className="loader__bee"></div>
      </div>
    </section>
  );
};

const FullPageLoader = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <PageLoading />,
        document.getElementById("loading")
      )}
    </>
  );
};

export default FullPageLoader;
