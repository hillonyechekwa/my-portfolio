module.exports = {
  siteMetadata: {
    title: "Hill Onyechekwa",
    summary: "Hill Onyechekwa is an emerging fullstack web developer and acclaimed web illusionist from Lagos, Nigeria.",
    description: "Hill Onyechekwa is a web developer 👨🏾‍💻, technical enthusiast and thought leader interested in engineering software solutions to exciting business challenges.",
    socials: {
      twitter: 'madeofhill',
      instagram: 'made.of.hill',
      github: 'hillonyechekwa',
      codepen: 'hillonyechekwa'
    },
  },
  plugins: ["gatsby-plugin-image", 
  "gatsby-plugin-react-helmet", 
  "gatsby-plugin-mdx", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'content',
      path: `${__dirname}/content`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  `gatsby-transformer-remark`,
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      additionalData: '@use "base" as *;',
      sassOptions: {
        includePaths: ["${__dirname}/src/styles"],
      }
    }
  }]
};