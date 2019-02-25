const _ = require('lodash')
const { generator } = require('./generator')
const { generatePosts } = require('./helper')

const path = require('path')

module.exports = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___myid], order: ASC }
            limit: 10000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const tagTemplate = path.resolve('src/templates/tags.js')
        const courseTemplate = path.resolve('src/templates/eachCourse.js')

        const allPosts = result.data.allMarkdownRemark.edges

        // generator(allPosts, createPage);

        const folders = [
          '/nodejs',
          '/reactjs',
          '/mongodb',
          '/howto',
        ]

        folders.forEach(folder => {
          return generatePosts(
            folder,
            allPosts,
            './src/templates/eachTutorials.js',
            createPage
          )
        })

        //articles
        generatePosts('/learn', allPosts, './src/templates/post.js', createPage)

        //tags
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(allPosts, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)

        // Make separate pages for each tag
        tags.forEach(tag => {
          createPage({
            path: `/learn/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })

        //creating each course group
        const courses = [
          'nodejs',
          'reactjs',
          'mongodb',
          'howto',
        ]
        courses.forEach(cs => {
          createPage({
            path: `/${_.kebabCase(cs)}`,
            component: courseTemplate,
            context: {
              cs,
            },
          })
        })

        return
      })
    )
  })
}
