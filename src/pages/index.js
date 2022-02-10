import { graphql, Link } from "gatsby"
import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import '../styles/home.scss'
import Avatar from '../components/Avatar'
import Arrow from '../components/arrow';



// markup
const IndexPage = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const summary = data.site.siteMetadata?.summary || `Summary`
  const [showNav, setShowNav] = useState(false)
  const handleOverlay = () => {

  }

  // useEffect = () => {
  //   hamburger.addEventListener('click',)
  // }

  return (
    <Layout>
      <header className="index-header grid-header" onClick={handleOverlay}>
        <div className="hamburger">
          <div className="top"></div>
          <div className="bun"></div>
          <div className="bottom"></div>
        </div>
        <h1 className="item-one grid-item" id="sitetitle">{siteTitle}</h1>
        <p className="item-two grid-item text" id="sitesummary">{summary}</p>
        <Avatar classNames={`item-three grid-item`} />
        <a href="#content-summary">
          <Arrow />
        </a>
      </header>
      <section className="content-summary grid-content" id="content-summary">
          <article className="grid-box box-one" id="development">
            <h2 className="section-title">
              development
            </h2>
            <article className="details dev-details">
              <p>I build web and mobile applications using modern 
                frontend and backend technologies including React, React Native
                Gatsby, Graphql, node and express and also emerging 
                web stacks and architechtures with JAMstack.</p>
                <p> some of my projects </p>
                <div className="dev-projects">
                  <article className="project-title">
                    <h2>kicks</h2>
                    <p> kicks is an e-commerce site built with JAMstack that sources data from a shoes API, and uses a paywall built with serverless functions.</p>
                  </article>
                  <article>
                  <h2 className="project-title">unwind</h2>
                  <p> Unwind is a mobile application built with React native that can be used to search for services from the hospitality and leisure industries and also providers of theses services can also meet with clients. </p>
                  </article>
                </div>
                <p> Checkout More of my projects <Link to="/projects">here →</Link> </p>
            </article>
          </article>
          <article className="grid-box box-two" id="writing">
            <h2 className="section-title">
              content creation
            </h2>
            <article className="details">
            <p className="text">
              I currently write on my personal blog - <a href="//hillsofcode.netlify.app">hillsofcode</a> -
              where I write about frontend development technologies, 
              Jamstack and JavaScript tutorials.
              </p>
              <p className="text">
              I also create content on my podcast -<a href="//hillsofcode/podcast"> hilltalkstech </a> -
              where I have fun talking about interesting 
              technology and  software development stuff.
              </p>
              </article>
          </article>
          <article className="grid-box box-three" id="community">
             <h2 className="section-title">
              community
            </h2>
            <article className="details">
              <p className="text">
              I enjoy bringing kids into the fun world of coding 
              as a coordinator of <a href="//smarteens.netlify.app">smart teen developers club </a>, a coding
              club for teenagers in the heart of Ikorodu, Lagos Nigeria.
              </p>
            </article>
          </article>
      </section>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
      summary
    }
  }
}
`

