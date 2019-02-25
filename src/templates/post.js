import React from 'react'
import CommonMarkdown from '../components/commonmarkdown'

import { searchStringInArray } from '../../helper'
import Link from 'gatsby-link'

class Post extends React.Component {
  render() {
    let searchedCourses = searchStringInArray(
      '/learn/',
      this.props.data.allMarkdownRemark.edges,
      3
    )

    return (
      <div>
        <CommonMarkdown
          nosidebar
          nomobilebar
          center
          data={this.props.data}
          location={this.props.location}
          pathContext={this.props.pathContext}
        />

        <div className="post-list auto">
          <div className="post-setup">
            <h1 className=" slim">Recommended for you</h1>
            {searchedCourses.map(({ node }, i) => (
              <Link to={node.fields.slug} key={i}>
                <div className="post-items">
                  <h2>{node.frontmatter.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Post
export const pageQuery = graphql`
  query Post4Query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      birthTime
      modifiedTime
      frontmatter {
        title
        tags
        description
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "*/learn/" } } }
      sort: { fields: [frontmatter___myid], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        url
        author
      }
    }
  }
`
