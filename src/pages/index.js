import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Mihai's Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>
              {node.frontmatter.title} - {node.frontmatter.date}
              <p>{node.excerpt}</p>
            </h2>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          excerpt
        }
      }
    }
  }
`
