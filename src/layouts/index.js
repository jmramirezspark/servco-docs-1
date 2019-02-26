import React from 'react'
import Metapost from '../components/MetaPost'
require('../themes/duo-tone.css');
import Header from '../components/header';
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div>
    <Metapost
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      url={data.site.siteMetadata.siteUrl}
      stop
      no
    />

    <Header siteTitle={'ServCo Wiki'} location={location} />
    <div>
      {children ? children(): <strong>Loading</strong>}
    </div>

    <Footer siteTitle={'ServCo Wiki'} />
  </div>
)


export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
