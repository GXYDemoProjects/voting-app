import React from 'react';

const Footer = () => (
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Voting App</h5>
          <p>
            Built by
            <a href="https://github.com/GuoXiaoyang">GuoXiaoyang</a>
          </p>
          <p>
            Following the instructions of 
            <a href="https://www.freecodecamp.org/challenges/build-a-voting-app">Basejump: Build a Voting App | Free Code Camp</a>
          </p>
        </div>
        <div class="col l4 offset-l2 s12">
          <iframe src="http://ghbtns.com/github-btn.html?user=GuoXiaoyang&repo=Voting-App&type=watch&count=true&size=large" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2017 Copyright, All rights reserved.
        <a class="grey-text text-lighten-4 right" href="https://github.com/Dogfalo/materialize/blob/master/LICENSE">MIT License</a>
      </div>
    </div>
  </footer>
);

export default Footer;