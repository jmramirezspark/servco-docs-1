import React from 'react'
import { searchStringInArray } from '../../../helper'
import '../../pages/commonMarkdown.css'

function MainUi(props) {
  const { allMarkdownRemark } = props.data

  const searchedCourse = searchStringInArray(
    `/${props.course}`,
    allMarkdownRemark.edges,
    props.limit ? props.limit : 5
  )

  return (

    <div>
      <div className={props.cls && props.cls}>
          {props.children}
        {!props.hide && <h3 style={{ textTransform:"capitalize"}}>{props.title}</h3>}
        <ul className="content-links">
          {searchedCourse.map(({ node }, i) => (
            <li key={i}>
              <a className={``} href={node.fields.slug}>{node.frontmatter.title}</a>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default MainUi
