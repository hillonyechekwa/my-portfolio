import React, {useEffect} from 'react';
import Layout from "../components/layout";
import {graphql} from 'gatsby'
import '../styles/project.scss'


const Project = ({data}) => {
    const {title, site, description} = data.markdownRemark.frontmatter
    const {html, excerpt} = data.markdownRemark
    return(
        <Layout>
            <header id="project-header">
                <h1 id="project-title">{title}</h1>
                <p className="text" id="project-description">{description}</p>
                <a href={site} id="project-site">go to project</a>
            </header>
            <main id="project-details">
                <article dangerouslySetInnerHTML={{__html: html}} />
            </main>
        </Layout>
    )
}




export default Project

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        type
        title
        site
        description
      }
      html 
      excerpt
    }
  }
`