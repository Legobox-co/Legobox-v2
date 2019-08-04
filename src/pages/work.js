import React from "react"
import Layout from "@components/Layout"
import {graphql, Link} from "gatsby"

const headerPic = require('../assets/HeaderPic.png')
const projectPic = require('../assets/Project.png')

export default ({data}) => <React.Fragment>
    <Layout>
        <div className="container">
            <div className="row h-100 mast">
                <div className="col-12 mb-5">
                    <h2 className="text-primary font-weight-bold">Featured Projects</h2>
                </div>
                    {
                    data.allMarkdownRemark.edges.map(dataPoint => (
                        <div key={dataPoint.node.id} className="col-md-6 col-sm-12 col-lg-6 mb-5 h-100">
                        <div className="row mb-5">
                            <div className="col-12 mb-5">
                                <div className="row justify-content-center">
                                    <div className="col-9">
                                        <img src={dataPoint.node.frontmatter.featuredImage.childImageSharp.original.src} className="w-100 h-100 object-fit-cover" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <h5 className="mb-3 font-weight-bold text-primary">
                                    {dataPoint.node.frontmatter.title}
                                </h5>
                                <p>
                                <small>
                                    {
                                        dataPoint.node.frontmatter.description
                                    }
                                </small>
                                </p>
                                <Link to={dataPoint.node.fields.slug}>
                                    <button className="btn btn-outline-primary">
                                        View more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className="row mt-4 justify-content-center mb-5">
                <div class="col-3 mt-5 text-center">
                    <button className="btn btn-light">
                        View more
                    </button>
                </div>
            </div>
        </div>
    </Layout>
</React.Fragment>

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
                    featuredImage {
                        id
                        childImageSharp {
                            original {
                            src
                            }
                        }
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
  }
`