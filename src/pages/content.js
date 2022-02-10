import React from 'react';
import Layout from '../components/layout'
import {Link} from 'gatsby'

const Content = () => {
    return(
        <Layout>
            <header className="content-header">
                <h1>content creation</h1>
                <p>Just as i enjoy building software I also love to talk and write about code.</p>
            </header>
            <section className="writing">
                <h2>I write about web development, tech and career on my blog <a href="//hillsofcode.netlify.app">hillsofcode</a>.</h2>
            </section>
            <section className="podcast">
                <h2>I talk about development, career in tech and issues within the tech industry on my podcast <a href="//hillsofcode/podcast.netlify.app">hilltalkstech</a></h2>
            </section>
        </Layout>
    )
}



export default Content


