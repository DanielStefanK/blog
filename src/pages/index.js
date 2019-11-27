import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card, CardText, CardTitle } from "../components/card"
import { commonTheme } from "../utils/theme"

const { rhythm, borderRadius } = commonTheme
const PostCard = styled(Card)`
  margin-bottom: ${() => rhythm(4)};
  color: "#ebebeb";
  &:hover {
    transform: scale(1.02);
  }
  &::before {
    position: absolute;
    border-radius: ${({ radius = 1 }) => borderRadius * radius}px;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 0.05;
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <AniLink key={node.fields.slug} fade to={node.fields.slug}>
              <PostCard hover={4} elevation={4}>
                <CardTitle>
                  <div>{title}</div>
                  <small>{node.frontmatter.date}</small>
                </CardTitle>
                <CardText>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </CardText>
              </PostCard>
            </AniLink>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
