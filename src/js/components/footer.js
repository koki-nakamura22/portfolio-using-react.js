import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="section-heading">
          <p>
            <strong>Koki Nakamura's portfolio page</strong> by Koki Nakamura.
          </p>
          <p>
            &copy; 2019-2022 Koki Nakamura
          </p>
          <p>
            The source code is licensed&nbsp;
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            This web page is created based on&nbsp;
            <a href="https://github.com/dansup/bulma-templates/blob/master/templates/personal.html">Portfolio</a>
            &nbsp;in&nbsp;
            <a href="https://github.com/dansup/bulma-templates">Bulma Templates.</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
