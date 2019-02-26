import React from 'react'
import Link from 'gatsby-link'

function NextPost(props) {
  let { prev, next } = props

  return (
    <ul className="pager">
      {prev && (
        <li>
          <Link to={prev.fields.slug}>
            Previous
            <div className="prev">{prev.frontmatter.title}</div>
          </Link>
        </li>
      )}
      {next && (
        <li>
          <Link to={next.fields.slug}>
            Next
            <div className ="next">{next.frontmatter.title}</div>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default NextPost
