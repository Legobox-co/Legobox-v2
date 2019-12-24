import React from "react"
import Layout from '@components/Layout'
import {ArrowRight} from "react-feather"

export default () => 
<Layout>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12 mt-5 text-center">
                <h2>Yo, bro</h2>
                <p>
                    Seems you lost your way 🤷🏽‍♂️
                </p>
                <button className="btn btn-primary">
                    Teleport home boy <ArrowRight />
                </button>
            </div>
        </div>
    </div>
</Layout>