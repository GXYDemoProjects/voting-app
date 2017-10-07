import React from 'react';
import { Link } from 'react-router';

const Header = ({ user }) => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">
        Voting App
      </a>
      <a href="#" data-activates="mobile-demo" class="button-collapse">
        <i className="material-icons">menu</i>
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <Link>
            Home
          </Link>
        </li>
        {
          user &&         
          <li>
            <Link to="/MyPolls">
              My Polls
            </Link>
          </li>         
        }
        {
          user &&         
          <li>
            <Link to="/NewPoll">
              New Poll
            </Link>
          </li>         
        }
        <li>
          {
            user && 
            <li>
              <a class="dropdown-button" href="#" onClick={dropDown}>
                Dropdown
                <i class="material-icons right">
                  arrow_drop_down
                </i>
              </a>
            </li>
          }
          {!user && }
        <Link>
        </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;