import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import GithubIcon from 'react-icons/lib/go/mark-github'


class Header extends React.Component {
  state = {
    active: false,
  }

  openUp = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    const { siteTitle } = this.props
    return (
      <div className="main-nav">

        <div className="header">
          {!this.state.active && (
            <Link to="/" className={`logostyle`}>
              {siteTitle}
            </Link>
          )}

          <nav
            className='nav active'
            aria-hidden={this.state.active ? true : false}
          >
            <Link
              to={'/nodejs/code_standars/'}
              activeStyle={{ backgroundColor: '#4a597e' }}
            >
              NodeJS
            </Link>            
            
            <Link
              to={'/reactjs/code_standars/'}
              activeStyle={{ backgroundColor: '#4a597e' }}
            >
              React
            </Link>

            <Link
              to={'/mongodb/code_standars/'}
              activeStyle={{ backgroundColor: '#4a597e' }}
            >
              MongoDB
            </Link>
          </nav>

          <a
            className="github"
            href="https://github.com/sparktechsllc/servco-docs"
            target="_blank"
            rel="noopener noreferer"
            style={{ color: 'white' }}
            title="GitHub"
          >
            <GithubIcon style={{ verticalAlign: `text-top` }} />
          </a>
        </div>
      </div>
    )
  }
}

export default Header
