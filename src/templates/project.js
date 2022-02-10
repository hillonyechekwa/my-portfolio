import React from 'react';
import Layout from "../components/layout";


const project = () => {
    return(
        <Layout>
            <header id="project-header">
                <h1 id="project-title"></h1>
                <p className="text" id="project-description"></p>
                <p id="project-site"></p>
            </header>
            <main id="project-details">
                <h2 id="tech-used-headline"></h2>
                <ul id="tech-used-list">
                    <li></li>
                </ul>
                <p id="repositiory-link"></p>
                <article id="experience">
                    <h2 id="experience-headline"></h2>
                    <p></p>
                </article>
            </main>
        </Layout>
    )
}




export default Layout