/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Svg from "../../components/Svg";
import SVGLogo from "../../assets/Logo/logo.svg";

import SVGMenu from "./menu.svg";
import classes from "./styles.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e);
  }

  render() {
    return (
      <div className={classes.component} role="banner">
        <div className={classes.menu}>
          <button className={classes.button} onClick={e => this.handleClick(e)}>
            <Svg svg={SVGMenu} />
          </button>
        </div>
        <Link to="/">
          <div className={classes.link}>
            <div className={classes.baseline}>
              <div>Webcompat</div>
              <div>Metrics</div>
            </div>
            <div className={classes.logo}>
              <Svg svg={SVGLogo} height={"4em"} width={"2em"} />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  onClick: PropTypes.func,
};

Header.defaultProps = {
  onClick() {},
};

export default Header;
