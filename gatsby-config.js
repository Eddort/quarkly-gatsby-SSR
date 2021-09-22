module.exports = {
  siteMetadata: {
    title: "Quarkly gatsby project",
    description: "",
    author: "@Александр Колесников",
    siteUrl: "https://example.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-resolve-src",

    `gatsby-plugin-netlify`,
  ],
}
