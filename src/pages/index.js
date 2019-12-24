import React, {Fragment, useState, useEffect} from "react"
import Layout from "@components/Layout"
import { ArrowRight, ArrowDownCircle } from "react-feather"
import {graphql} from "gatsby"
import { CSSTransition} from 'react-transition-group';


const headerPic = require('../assets/HeaderPic.jpeg')
const projectPic = require('../assets/Project.png')
const patternset = require('../assets/patternset.svg')
const header3 = require('../assets/header-3.png')

export default ({data}) => {
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <React.Fragment>
        <Layout>
            <Fragment>
                <div className="container">
                    <div className="row h-100 mast " style={{backgroundImage: `url(${patternset})`}}>
                        <div className="col h-100">
                            <div className="row justify-content-center align-item-center mt-4">
                                <div className="col-md-7 col-12 align-self-end mt-4">
                                    {
                                        isMounted && <CSSTransition classNames="fade" timeout={3000}>
                                        <div>
                                            <h2 className="">
                                                Hello there, Welcome to Legobox !<br/>
                                                web and product design for small 
                                                business and new startups 
                                            </h2>
                                            <p className="font-weight-lighter text-secondary mt-5">
                                            we are a really small team of engineers and designers building platforms we love,  We could help you build yours too. 
                                            </p>
                                        </div>
                                    </CSSTransition>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mb-5 row mt-4 justify-content-center">
                        <div className="col-3 mt-5 text-center">
                            <ArrowDownCircle className="text-secondary cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 bg-primary" style={{backgroundImage: `url(${patternset})`}}>
                        <div className="row justify-content-center">
                            <div className="col-md-7 p-4 text-white d-inline-flex">
                                    <div>
                                        <h3 className="mt-5">
                                            Design and processes from experience.
                                        </h3>
                                        <p className="mb-3 mt-3 small">
                                            My name is Chibuike Emmanuel Osita,  Developer, Founder and Code wrangler here at Legobox. <br/>
                                            I use web technologies to make cool stuffs. It’s always been a mission of mine to build a sh*t-ton of useful ideas in a lifetime, and Legobox is my way of creating that value.<br/> You could be a part of the journey. The customer and user is our focus point here, and we avoid the non-essentials, and focus on one goal, building carefully crafted innovations. You could be a part of our journey
                                        </p>
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-5 order-first bg-light" style={{minHeight: 632}}>
                                <div className="mt-5 col-12 float-right" style={{zIndex: 200}}>
                                    <img src={headerPic} className="header-left"/>
                                </div>
                                <div className="mt-2 col-12 float-right" style={{zIndex: 200}}>
                                    <p className="text-right header-left">Osita Chibuike Emmanuel founder @legobox</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 pt-5 bg-white" style={{minHeight: 500}}>
                            <div className="row mt-5 justify-content-center">
                                <div className="col-md-7">
                                    <div className="h1">
                                        <h1>What we really do</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 justify-content-center">
                                <div className="col-md-7">
                                    <p>Our vision is huge, but of what use is it if we don’t deliver ?
                                    Well we do care deeply about that </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 bg-light" style={{backgroundImage: `url(${patternset})`}}>
                        <div className="row justify-content-center">
                            <div className="col-md-7 p-4 text-secondary">
                                    <div>
                                        <h4 className="mt-5">
                                            Idea incubation
                                        </h4>
                                        <p className="mb-3 mt-3 small">
                                        Ideas are easy to come by, but truly beautiful ideas take time to morph,, we under stand this deep in our process, and through that we incubate to build trully innovative and useful solutions, while identify and getting rid of roadblocks.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="mt-5">
                                            Product Design
                                        </h4>
                                        <p className="mb-3 mt-3 small">
                                            Preparation is just a step, we make it right, by modeling ideas into practical solutions, that would fit the model, taking into account both the user, and their knowledge.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="mt-5">
                                            Product Creation
                                        </h4>
                                        <p className="mb-3 mt-3 small">
                                        We build, Create and provide you the solution front and center.
                                        </p>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 bg-yellow" style={{backgroundImage: `url(${patternset})`}}>
                            <div className="row mt-5 justify-content-center">
                                <div className="col-md-7">
                                    <div className="h1">
                                        <h1>We like boxes and what we've done</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 justify-content-center">
                                <div className="col-md-7">
                                    <p>Our vision is huge, but of what use is it if we don’t deliver ?
                                        Well we do care deeply about that </p>
                                </div>
                            </div>
                            <div className="row mt-5 justify-content-center">
                                <div className="col-md-7">
                                    <a className="text-underline"> View recent missions <ArrowRight className="cursor-pointer"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 bg-white" style={{minHeight: 500, backgroundImage: `url(${header3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                <div className="row mt-5">
                        <div className="col-md-12 " >
                            <div className="row mt-5 justify-content-center">
                                <div className="col-md-7">
                                    <div className="header-body">
                                        <div className="header-pretitle small text-secondary text-uppercase">How we pull this off</div>
                                        <div className="header-title font-weight-bold">
                                            <h3>Here’s an idea of how we make things happen.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-7">
                            <div className="row justify-content-between">
                                <div className="col-md-5">
                                    <div className="row mt-5 justify-content-center">
                                        <div className="col-auto">
                                            <div className="display-3">
                                                <h1 className="font-weight-bold">01</h1>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <h5 className="font-weight-bold">Listen</h5>
                                            </div>
                                            <div className="row">
                                                <p className="small">we take the time to learn and understand the 
                                                    problem we are trying to solve, while keeping
                                                    the objective in heart.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 ">
                                    <div className="row mt-5 justify-content-center">
                                        <div className="col-auto">
                                            <div className="display-3">
                                                <h1 className="font-weight-bold">02</h1>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <h5 className="font-weight-bold">Verify</h5>
                                            </div>
                                            <div className="row">
                                                <p className="small">we take the time to learn and understand the 
                                                problem we are trying to solve, while keeping
                                                the objective in heart.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-7">
                            <div className="row justify-content-between">
                                <div className="col-md-5">
                                    <div className="row mt-5 justify-content-center">
                                        <div className="col-auto">
                                            <div className="display-3">
                                                <h1 className="font-weight-bold">03</h1>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <h5 className="font-weight-bold">Design</h5>
                                            </div>
                                            <div className="row">
                                                <p className="small">We move on to take action in making the ideas reality.  This would involved designing UI interfaces if needed and project structure..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 ">
                                    <div className="row mt-5 justify-content-center">
                                        <div className="col-auto">
                                            <div className="display-3">
                                                <h1 className="font-weight-bold">04</h1>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <h5 className="font-weight-bold">Execution</h5>
                                            </div>
                                            <div className="row">
                                                <p className="small">After coming to conclusions, we begin taking those steps to making the future a reality.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-danger">
                    <div className="row mt-3 justify-content-center">
                    <div className="col-md-7 col-md-9">
                        <div className="row">
                                <div className="col-12 col-md-6 text-white">
                                    <div className="row mt-4">
                                    <div className="col">
                                        <h2 className="display-4">Let’s build something awesome</h2>
                                    </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <p className="font-weight-light">Let’s work together and build something really amazing, fill this up, let’s 
                know more about you and your needs.</p>
                                    </div>
                                    </div>
                                </div>  
                                <div className="col-12 col-md-6 text-white">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> Enter your fullname</label>
                                                <input className="form-control bg-transparent text-white"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Enter your email</label>
                                                <input className="form-control bg-transparent text-white"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>What's on your mind</label>
                                                <textarea className="form-control bg-transparent text-white" rows="10" ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                               <button className="btn btn-white text-danger">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        </Layout>
    </React.Fragment>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark {
        edges {
            node {
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