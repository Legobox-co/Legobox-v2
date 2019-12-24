import React from "react"
// import Header from "../components/Header"
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
                    <h2 className="text-primary font-weight-bold">About</h2>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 mb-5 h-100">
                    <div className="row">
                        <div className="col-12">
                            <p className="font-weight-lighter text-secondary">
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find.
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
                <div className="col-md-6 col-sm-12 col-lg-6 mb-5 h-100">
                    <img src={headerPic} className="w-100"/>
                </div>
            </div>
        </div>
    </Layout>
</React.Fragment>
