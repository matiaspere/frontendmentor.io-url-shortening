import React from "react";
import style from "../styles/Header.module.scss";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.HeaderLeft}>
        <img src={logo} />
        <ul>
          <li>
            <p className={style.HeaderText}>Features</p>
          </li>
          <li>
            <p className={style.HeaderText}>Pricing</p>
          </li>
          <li>
            <p className={style.HeaderText}>Resources</p>
          </li>
        </ul>
      </div>
      {/* <div className={style.HeaderRight}>
        <ul>
          <li>
            <p className={style.HeaderText}>Login</p>
          </li>
          <li>
            <button className={style.HeaderSignUp}>Sign Up</button>
          </li>
        </ul> */}
        <div className={style.HeaderRight}>
            <p className={style.HeaderText}>Login</p>
            <button className={style.HeaderSignUp}>Sign Up</button>
            <img className={style.HeaderMenu} src={menu} />
      </div>
    </div>
  );
};

export default Header;
