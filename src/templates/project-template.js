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
                            <h1>{post.frontmatter.title}</h1>
                        </div>
                        <div className="mt-5 col-12" dangerouslySetInnerHTML={{ __html: post.html }}>
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
      }
    }
  }
`