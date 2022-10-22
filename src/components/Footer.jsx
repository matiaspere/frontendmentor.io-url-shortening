import React from "react";
import style from "../styles/Footer.module.scss";
import fb from '../images/icon-facebook.svg';
import tw from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import ig from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className={style.Footer}>
      <h3>Shortly</h3>

      <div>
        <p>Features</p>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div>
        <p>Resources</p>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div>
        <p>Company</p>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={style.SocialMedia}>
        <img src={fb}/>
        <img src={tw}/>
        <img src={pinterest}/>
        <img src={ig}/>
      </div>
    </div>
  );
};

export default Footer;
