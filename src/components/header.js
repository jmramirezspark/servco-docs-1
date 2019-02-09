import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/spark-logo.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#1e305f`,
      marginBottom: `1.45rem`,
      color:`#7a797a`
    }}
  >    
    <img
      style={{
      float:`left`,
      filter: `brightness(0) invert(1)`,
    }}
      src={logo} alt="Logo" />


    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >  

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
