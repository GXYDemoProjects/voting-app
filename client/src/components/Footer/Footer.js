import React from 'react';

const Footer = () => {
  const socialLinks = [
    {href: 'https://github.com/GuoXiaoyang', iconHref: 'icon-mark-github'}, 
    {href: 'https://www.instagram.com/mrguo_missshaw', iconHref: 'icon-instagram-with-circle'}, 
    {href: 'https://twitter.com/guoxiaoyang0925', iconHref: 'icon-twitter-with-circle'}, 
    {href: 'https://www.facebook.com/profile.php?id=100008315050779&ref=bookmarks', iconHref: 'icon-facebook-with-circle'}, 
  ];
  const renderSocialLink = (social, index) => (
    <a href={social.href} target="_blank" key={index}>
      <svg className={`icon ${social.iconHref}`}>
        <use xlinkHref={`#${social.iconHref}`}></use>
      </svg>
    </a>
  );
  const socialIconWithLinks = (
    socialLinks.map((socialLink, index) => renderSocialLink(socialLink, index))
  );
  return (
    <footer className="page-footer grey darken-3">
      <div className="container">
        <div className="row">
          <h5 className="white-text">CONTACT</h5>
        </div>
        <div className="row">
          {socialIconWithLinks}
          
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2017 Copyright, All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;