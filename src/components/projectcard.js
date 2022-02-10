import React from 'react'
import {Link } from 'gatsby'

const ProjectCard = ({details}) => {
    return(
        <div className="card">
            <h2>{details.title}</h2>
            <p>{`${details.description} <Link to="">see more</Link>`}</p>
            <a href="#">
                go to site
            </a>
        </div>
    )
}

export default ProjectCard