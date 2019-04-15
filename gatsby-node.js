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

        const homepages = result.data.allContentfulHomepageText.edges
        
        homepages.forEach((index) => {
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