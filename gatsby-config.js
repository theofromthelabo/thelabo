module.exports = {
  siteMetadata: {
    title: "Online Strategy, Growth Marketing & Digital Production | Théo Courtial",
    description: "Let's build solutions from a smart and efficent mix of Online Strategy, Growth Hacking & Digital Production"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: `standalone`,
        icon: 'src/assets/images/theocourtial-favicon.png', // This path is relative to the root of the site.
        include_favicon: true, 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'project-photos',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        }
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
