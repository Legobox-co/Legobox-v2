import React from "react"
import Layout from "@components/Layout"
import { ArrowRight, ArrowDownCircle } from "react-feather"
import { graphql } from "gatsby"

const headerPic = require('../assets/HeaderPic.png')
const projectPic = require('../assets/Project.png')

export default ({data}) => <React.Fragment>
    <Layout>
        <div className="container">
            <div className="row h-100 mast">
                <div className="col h-100">
                    <div className="row justify-content-center align-item-center mt-5">
                        <div className="col-12 align-self-end">
                            <h1 className="display-4 font-weight-bold">
                                Adegoke Damola
                            </h1>
                            <p className="font-weight-lighter">
                                UI/UX designer creating beautiful, <br/> simple and usable products
                            </p>
                            <button className="btn btn-primary">
                            <span className="small mr-2">
                                Get in Touch    
                                </span> 
                                <ArrowRight size="12" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col h-100">
                    <img src={headerPic} className="w-100"/>
                </div>
            </div>
            <div className="row mt-4 justify-content-center">
                <div class="col-3 mt-5 text-center">
                    <ArrowDownCircle className="text-secondary cursor-pointer"/>
                </div>
            </div>
            <div className="row h-100 mast">
                <div className="col-12 mb-5">
                    <h2 className="text-primary font-weight-bold">Featured Projects</h2>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 mb-5 h-100">
                    <div className="row">
                        <div className="col-4">
                            <img src={projectPic} className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="col-8">
                            <h4 className="mb-3">Project name</h4>
                            <p>
                            <small>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the.</small>
                            </p>
                            <button className="btn btn-outline-primary">
                                View more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 mb-5 h-100">
                    <div className="row">
                        <div className="col-4">
                            <img src={projectPic} className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="col-8">
                            <h4 className="mb-3">Project name</h4>
                            <p>
                            <small>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the.</small>
                            </p>
                            <button className="btn btn-outline-primary">
                                View more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 mb-5 h-100">
                    <div className="row">
                        <div className="col-4">
                            <img src={projectPic} className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="col-8">
                            <h4 className="mb-3">Project name</h4>
                            <p>
                            <small>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the.</small>
                            </p>
                            <button className="btn btn-outline-primary">
                                View more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 mb-5 h-100">
                    <div className="row">
                        <div className="col-4">
                            <img src={projectPic} className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="col-8">
                            <h4 className="mb-3">Project name</h4>
                            <p>
                            <small>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the.</small>
                            </p>
                            <button className="btn btn-outline-primary">
                                View more
                            </button>
                        </div>
                    </div>
                </div>
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
    site {
      siteMetadata {
        title
      }
    }
  }
`