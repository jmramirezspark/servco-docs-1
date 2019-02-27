import React from 'react'
import './main.css'
import MainUi from '../components/mainui/mainui'


class Index extends React.Component {
  render() {
    return (
      <div className="bglight auto">
        <div className="main-grid padding-top5">
          <MainUi course={`howto`} title={`How to`}  data={this.props.data} />
          <MainUi course={`mongodb/database`} title={`MongoDB`}  data={this.props.data} />
          <MainUi course={`nodejs`} title={`NodeJS Code standard`} data={this.props.data} />
          <MainUi course={`reactjs`} title={`ReactJS Code standard`} data={this.props.data} />
          <MainUi course={`mongodb/code_standards`} title={`MongoDB Code standard`}  data={this.props.data} />
        </div>
      </div>
    )
  }
}
export default Index

export const query = graphql`
  query Evry {
    allMarkdownRemark(
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
  }
`
