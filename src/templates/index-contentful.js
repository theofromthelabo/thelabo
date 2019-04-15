import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

class HomepageContentfulTemplate extends React.Component {
    render() {
        // const homepage = this.props.data.contentfulHomepageText

        return (
            <Layout>
                <Helmet
                    title="Online Strategy, Growth Hacking & Digital Production | Théo Courtial"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />
                
                <div id="main">
                    {/* <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="content">
                                <p>After identifying a problem, cool down and step back by overviewing the existing ecosystem and by thinking of a stategy to bring traffic. No traffic => no ROI</p>
                                <ul className="actions">
                                    <li><a href="#two" className="button next scrolly">Think fist</a></li>
                                </ul>
                            </header>
                            <a href="#two" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="content">
                                <p>Adopt a smart and effcient way to build your platfom, your solution or your product based on lean apporach and data driven process. Smart small and build big for the long run</p>
                                <ul className="actions">
                                    <li><Link to="/landing" className="button next">Build smartly</Link></li>
                                </ul>
                            </header>
                            <a href="#three" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="content">
                                <p>An idea is the creattion of one or several people and excution is the collaboration of multiple people to turn it into reality. So imagine if the human fondation is disharmonious</p>
                                <ul className="actions">
                                    <li><Link to="/landing" className="button next">Human touch</Link></li>
                                </ul>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section> */}
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Think first</h2>
                            </header>
                            <p>
                                After identifying a problem - cool down, step back AND:<br />
                                Leverage the existing <span className="red-highlight">#</span>digital ecosystem to avoid reinventing the wheel and match <span className="red-highlight">#</span>needs<br />
                                Draw a <span className="red-highlight">#</span>strategy to generate <span className="red-highlight">#</span>growth according to the business <span className="red-highlight">#</span>goals<br />
                                Define objectives with <span className="red-highlight">#</span>success indicators to set stakeholders’ satisfaction
                            </p>
                        </div>
                    </section>
                    <section id="three">
                        <div className="inner">
                            <header className="major">
                                <h2>Excecute smartly</h2>
                            </header>
                            <p>
                                Adopt a <span className="red-highlight">#</span>smart and <span className="red-highlight">#</span>efficient way to build the solution<br />
                                Build it based on a <span className="red-highlight">#</span>lean approach to validate solution with minimum ressources = hit the <span className="red-highlight">#</span>market as early as possible and then <span className="red-highlight">#</span>iterate until the solution is on the right track<br />
                                By keeping listening the user's <span className="red-highlight">#</span>insights and <span className="red-highlight">#</span>data to make sure it’s on the right track
                            </p>
                        </div>
                    </section>
                    <section id="four">
                        <div className="inner">
                            <header className="major">
                                <h2>Act collectively</h2>
                            </header>
                            <p>
                                NO need the best skills individually<br />
                                BUT the best as a team to create human <span className="red-highlight">#</span>synergy based on shared common values such as <span className="red-highlight">#</span>respect, <span className="red-highlight">#</span>openness, <span className="red-highlight">#</span>empathy, <span className="red-highlight">#</span>curiosity, <span className="red-highlight">#</span>commitment, <span className="red-highlight">#</span>discipline, <span className="red-highlight">#</span>determination, <span className="red-highlight">#</span>reliability, <span className="red-highlight">#</span>dedication, <span className="red-highlight">#</span>creativity<br />
                                Create the <span className="red-highlight">#</span>environment to act collectively through the tools and processes: <span className="red-highlight">#</span>collaborative tools, conditions to voice out and <span className="red-highlight">#</span>be heard, processes of brain <span className="red-highlight">#</span>sharing
                            </p>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomepageContentfulTemplate

export const pageQuery = graphql`
    query {
        contentfulHomepageText{
            id
            tagline  
        }
    }
`