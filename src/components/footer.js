import React from 'react'
import Link from 'gatsby-link'
import './footer.css'
import './header.css'

function Footer({ siteTitle }) {
  return (
    <footer className="footer-g">
      <hr />

      <section className="footer-start">
        <Link to="/" className="footer-title logostyle">
          {siteTitle}
        </Link>

        <nav className="footer-links">
          <Link to={'/nodejs/code_standards/'}>NodeJS</Link>
          <Link to={'/reactjs/code_standards/'}>React</Link>
          <Link to={'/mongodb/code_standards/'}>MongoDB</Link>
        </nav>
      </section>
    </footer>
  )
}

export default Footer
