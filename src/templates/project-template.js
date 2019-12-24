import React from "react"
import Layout from "@components/Layout"
import { graphql } from "gatsby"

export default ({data}) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <div className="container">
                <div class="row mt-5">
                    <div class="container">
                        <div class="row mx-5">
                        <div class="col-12">
                            <h1 className="font-weight-bold">{post.frontmatter.title}</h1>
                            <h4 className="font-weight-light">{post.frontmatter.description || null}</h4>
                        </div>
                        <div className="mt-5 col-12 editor" dangerouslySetInnerHTML={{ __html: post.html }}>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`