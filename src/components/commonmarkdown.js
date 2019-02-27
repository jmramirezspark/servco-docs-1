import React from 'react'
import MetaPost from './MetaPost'
import '../templates/blog-post.css'
import '../pages/commonMarkdown.css'
import Sidebar from './sidebar'
import Mobilebar from './mobilesidebar'
import NextPost from './NextPost'

class commonMarkDown extends React.Component {
  state = {
    scrollHeight: 0,
  }

  componentDidMount() {
    window.onscroll = this.updateScroll
  }

  updateScroll = () => {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    var scrolled = (winScroll / height) * 100
    this.setState({
      scrollHeight: scrolled,
    })
  }

  componentWillUnmount() {
    window.onscroll = null
  }

  render() {
   const post = this.props.data.markdownRemark
    const url = this.props.data.site.siteMetadata.url
    const pathname = this.props.location.pathname
    const { title, description, date, thumbnail,  logo } = post.frontmatter
    const { next, prev } = this.props.pathContext
    const seoTitle = `${title } - ${
      this.props.course   && this.props.course.charAt(0).toUpperCase() + this.props.course.slice(1)
      }`

    return (
      <div className="main">
        <MetaPost
          title={this.props.course ? seoTitle : title}
          description={description}
          date={date}
          url={url}
          pathname={pathname}          
          thumbnail={this.props.thumbnail || (thumbnail && url + thumbnail)}
          dateMod={post.modifiedTime}
          datePub={post.birthTime}
        />
        <div className="progress-bar">
          <span
            className="bar"
            style={{ width: this.state.scrollHeight + '%' }}
          />
        </div>

        {!this.props.nosidebar && (
          <Sidebar
            data={this.props.data}
            course={this.props.course}
            clogo={logo}
            right={this.props.right}
            pathname={pathname}
          />
        )}
        {!this.props.nomobilebar && (
          <Mobilebar data={this.props.data} course={this.props.course} />
        )}

        <div
          className="content"
          style={{
            marginLeft: `${this.props.right ? 0:""}`,
            margin: `${this.props.center ? '0 auto':""}`,
          }}
        >
          <article className="content-bar">
            <h1>{title}</h1>
            {thumbnail && (<img src={thumbnail}/>)}
            <div
              style={{ marginTop: '1rem' }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <NextPost prev={prev} next={next} />
          </article>
        </div>
      </div>
    )
  }
}

export default commonMarkDown
