import React, {Fragment} from "react"
import Header from "./Header"
import Footer from "./Footer"
import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )

    return (
        <Fragment>
            <Header data={data} />
            {children}
            <Footer/>
        </Fragment>
    )
}