/*==========================================
Title:  move-app-react
Date:   14-Oct-2021
==========================================*/
import React from "react";
import "./page-header.scss";
import bg from "../../assets/footer-bg.jpg";

const PageHeader = (props) => {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${bg})` }}
    ></div>
  );
};
export default PageHeader;
