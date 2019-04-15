/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const homepageTemplate = path.resolve(`./src/templates/index-contentful.js`)

    return graphql(
        `
            {
                allContentfulHomepageText {
                    edges {
                        node {
                            id
                        }
                    }
                }
            }
        `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        const homepageText = result.data.allContentfulHomepageText
        
        homepageText.forEach((index) => {
            createPage({
                path: `/${index.node.id}/` , 
                component: homepageTemplate, 
                context: {
                    id: index.node.id,
                },
            })
        })
    })
}