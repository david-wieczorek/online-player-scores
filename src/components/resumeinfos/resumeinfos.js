import React, { Component } from 'react';
import dwme from './dw_me.jpg';

class Welcome extends Component {
  render() {
    return (
      <div className="resume-me">
        <div className="bloc">
          <img className="welcome-logo" src={dwme} alt="Logo" />
          <h3>David Wieczorek</h3>
          <h4>Lead Front End Developer</h4>
          <span className="status">
            Available: <span />
          </span>
          <div className="link">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/dwieczorek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/david-wieczorek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:davidwieczorekpro@gmail.com"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
