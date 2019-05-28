import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.posts.edges.map(({ node }) => {
    return node
  })

  const post = posts[0]

  return (
    <Layout>
      <SEO
        title={post.seo_title}
        keywords={[`gatsby`, `application`, `react`]}
      />
             <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <img
            key={post.featured_image}
            style={{ width: `200px`, borderRadius: `10px` }}
            src={post.featured_image}
          />
        </div>
      <div
        style={{
          height: `50%`,
          display: `flex`,
          padding: `1rem`,
          alignItems: `center`,
          justifyContent: `center`,
          flexDirection: `column`,
          background: `linear-gradient(-45deg, rgb(29, 64, 86) 0%, rgb(60, 24, 78) 100%)`,
        }}
      >
        <h1
          style={{
            textAlign: `center`,
            color: `white`,
            fontSize: `2.5rem`,
            fontWeight: `100`,
            maxWidth: `960px`,
          }}
        >
          {post.title}
        </h1>

 

        <p
          style={{
            textAlign: `center`,
            color: `white`,
            fontSize: `1rem`,
            fontWeight: `100`,
            maxWidth: `960px`,
          }}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    posts: allButterPost {
      edges {
        node {
          id
          title
          seo_title
          featured_image
          body
        }
      }
    }
  }
`

export default IndexPage
