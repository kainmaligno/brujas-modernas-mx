module.exports = {
  siteMetadata: {
    title: `Festival De Brujas Festival de Brujas México`,
    description: `Festival de Brujas México creamos eventos, festivales y shows privados para toda persona que vibra con magia. Contrataciones: labrujamoderna.oficial@gmail.com`,
    url: "https://www.festivaldebrujasoficial.com", // No trailing slash allowed!
    image: "/images/logob-negro.jpg", // Path to your image you placed in the 'static' folder
    author: `@drakarzamael`,
    },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `galeri`,
        path: `${__dirname}/src/assets/galeria`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/trisicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
