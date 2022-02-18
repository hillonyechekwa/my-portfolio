import { graphql, Link } from "gatsby"
import React, {useState, useRef, useEffect} from "react"
import Layout from '../components/layout'
import '../styles/home.scss'
import Nav from '../components/nav'
import Avatar from '../components/Avatar'
import {AiFillCaretDown} from 'react-icons/ai'
import {gsap} from 'gsap'



// markup
const IndexPage = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const summary = data.site.siteMetadata?.summary || `Summary`
  const [showNav, setShowNav] = useState(false)
  const [clicked, setClicked] = useState(false)

  //refs
  const contentRef = useRef(null)
  const el = useRef()
  const ham = gsap.utils.selector(el)
  const tl = useRef()
  const arrowRef = useRef(null)
  //animations
  const animateHover = tl.current = gsap.timeline()
  .to(ham(".top"),{
    x: 30,
    repeat: 1,
    yoyo: true,
    animationDuration: 3,
    // ease: 'power1.easeOut'
    
  })
  .to(ham(".bun"), {
    x: -15,
    repeat: 1,
    yoyo: true,
  })



  const animateClick = tl.current = gsap.timeline()
      .to(ham(".top"), {
        y: 30,
        rotate: 60,
       //  ease: 'power1.easeOut'
      })
      .to(ham(".bun"), {
        x: -100,
        display: 'none'
      })
      .to(ham(".bottom"), {
        y: 20,
        x: -5,
        rotate: -60,
       //  ease: 'power1.easeOut'
      })

  //scroll to content section with animation
  const scrollIntoView = () => {
    gsap.to(contentRef.current, {
      duration: 1,
      y: 0,
      ease: 'power2.inOut'
    })
  }

  //handlers
  const handleBurgerClick = () =>{
    if(clicked === true){
      animateClick.play()
      animateHover.pause()
    }
  }

  //handles scrolling to content section
  const scrollToContent = () => {
    contentRef.current.scrollIntoView({behavior: 'smooth'})
  }



  useEffect (() => {
      arrowRef.current.addEventListener('click', () => scrollToContent())
      el.current.addEventListener('mouseover', () => animateHover.play())
      
      el.current.addEventListener('click', () => {
        setClicked(true)
        handleBurgerClick()
      })
      return () => {
        arrowRef.current.removeEventListener('click', () => scrollToContent())
        el.current.removeEventListener('mouseover', () => animateHover.kill())
        el.current.removeEventListener('click', () => animateClick.kill())
      }
  },[clicked])

  return (
    <Layout>
      <Nav />
      <header className="index-header grid-header">
        <div className="hamburger" ref={el} onClick={handleBurgerClick}>
          <div className="top"></div>
          <div className="bun"></div>
          <div className="bottom"></div>
        </div>
        <h1 className="item-one grid-item" id="sitetitle">{siteTitle}</h1>
        <p className="item-two grid-item text" id="sitesummary">{summary}</p>
        <Avatar classNames={`item-three grid-item`} />
        <span ref={arrowRef}>
        <AiFillCaretDown className="arrow" />
        </span>
      </header>
      <section className="content-summary grid-content" id="content-summary" ref={contentRef}>
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
              I currently write on my personal blog - <a href="//letspeakdev.netlify.app">letspeakdev</a> -
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
              as a coordinator of <a href="//twitter.com/Stdc_Lagos">smart teen developers club </a>, a coding
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

