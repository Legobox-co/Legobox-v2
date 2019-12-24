import React from "react"
import Layout from "@components/Layout"
import { ArrowRight, ArrowDownCircle } from "react-feather"
import { graphql } from "gatsby"

const headerPic = require('../assets/HeaderPic.jpeg')
const projectPic = require('../assets/Project.png')

export default ({data}) => <React.Fragment>
    <Layout>
        <div className="container">
            <div className="row h-100 mast">
                <div className="col-12 mb-5">
                    <h2 className="text-primary font-weight-bold">Hello</h2>
                </div>
            </div>
            <div className="row d-inline-flex justify-content-between">
                <div className="col-md-5  col-sm-12  mb-5 h-100">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <input className="form-control" placeholder="Fullname"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Phone number"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="7" placeholder="Enter your message">

                                    </textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-block btn-primary">
                                        Get in Touch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5  col-sm-12  mb-5 h-100">
                        <p className="text-secondary">+2349021366728</p>
                        <p className="text-secondary">adegokedamolat@gmail.com</p>
                        <p className="text-secondary">This is my address please call me</p>
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