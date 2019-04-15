import React from 'react'
import { graphql } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Solve problem with digital solution(s)</h1>
            </header>
            <div className="content">
                <p>Start the fundations <span className="red-highlight">#</span>smartly and <span className="red-highlight">#</span>efficiently and<br />
                maximize the chance to get bigger in the long run</p>
            </div>
        </div>
    </section>
)

export default Banner

export const pageQuery = graphql`
    query {
        contentfulHomepageText{
            id
            tagline  
        }
    }
`
