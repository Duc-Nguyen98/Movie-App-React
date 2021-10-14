/*==========================================
Title:  move-app-react
Date:   12-Oct-2021
==========================================*/
import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import BackGround from "../../assets/footer-bg.jpg";
import Logo from "../../assets/tmovie.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${BackGround})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={Logo} alt="BeeMovies-Logo" />
            <Link to="/">tMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
