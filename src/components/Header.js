import React from "react";
import { Link } from "gatsby"
import {Menu} from "react-feather"
const img = require('../assets/Logo.png')

export default ({data}) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
                <a className="navbar-brand" href="#">
                    <img src={img} className="navbar-brand-img" alt={data.site.siteMetadata.title}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <Menu className="text-primary" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-2">
                            <Link className="nav-link" activeClassName="text-primary"  to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" activeClassName="text-primary"  to="/work">Work</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" activeClassName="text-primary"  to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" activeClassName="text-primary"  to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}