import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/fontawesome-free-solid';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              JSFoo Demo App
            </a>
            <div className="navbar-burger burger" data-target="navbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbar" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" title="Visit home page">
                <FontAwesomeIcon icon={faHome} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;