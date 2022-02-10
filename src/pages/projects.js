import React from 'react';
import Layout from '../components/layout'
import '../styles/projects.scss';
import {Link, useStaticQuery, graphql} from 'gatsby'
import Browsersvg from '../components/browsersvg'
import Mobilesvg from '../components/mobilesvg'



const Projects = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            site
            description
            type
          }
          fields {
            slug
          }
          id
        }
      }
    }
  `)
  const projectData = data.allMarkdownRemark.nodes

  // console.log(data)
    return(
        <Layout>
            <header className="about-header">
                <div className="page-title">
                    <h1>projects</h1>
                </div>
                <p>Here are some projects I've worked on that range from fullstack web applications and to mobile applications and some frontend fun. </p>
               
            </header>
            <main id="project-main">
                <section id="web-project">
                    <h2 className="title">
                        Web Projects
                    </h2>
                    <Browsersvg classes={`brwsr`} />
                    <article className="projects">
                      {
                        projectData.map(node => {
                          if(node.frontmatter.type === "web"){
                            return(
                              <Link to={node.fields.slug} key={node.id} className="details">
                              <Browsersvg classes={`proj-img`} />
                                <article>
                                  <h2>{node.frontmatter.title}</h2>
                                 <p className="text"> {`
                                    ${node.frontmatter.description}
                                  `.slice(0,150)+`...`}</p>
                                </article>
                              </Link>
                            )
                          }
                          
                        })
                      }
                    </article>
                </section>
                <section id="mobile-project">
                    <h2 className="title">
                        Mobile Projects
                    </h2>
                    <Mobilesvg classes={`screen`} />
                    <article id="mobile">
                    {
                        projectData.map(node => {
                          if(node.frontmatter.type === "mobile"){
                            return(
                              <Link to={node.fields.slug} key={node.id}>
                                <Mobilesvg classes={`proj-screen`} />
                                <article className="project-deets">
                                  <h2>{node.frontmatter.title}</h2>
                                  <p>{` ${node.frontmatter.description}`.slice(0,80)+`...`}</p>
                                </article>
                              </Link>
                            )
                          }
                        })
                      }
                    </article>
                </section>
            </main>
        </Layout>
    )
}


export default Projects

