import React from 'react';
import '../styles/footer.scss'

const Footer = () => {""
    return(
        <footer>
            <form action="" id="contact-form" method="POST">
                <header>
                    <h2>Send me a message</h2>
                    <p className="text">want to collaborate on an interesting project or want to contact me for a role or a job?, send me a message and I'll get back to you.</p>
                </header>
                <ul className="form-control">
                    <li>
                        <label htmlFor="email">
                            email:
                        </label>
                        <input type="email" name="email" id="email" placeholder=" email" />
                    </li>
                    <li>
                        <label htmlFor="message">
                            message:
                        </label>
                        <textarea name="message" id="message"  placeholder=" write your message" />
                    </li>
                    <li>
                        <input type="submit" id="submit" value="send" />
                    </li>
                </ul>
            </form>
            <nav id="footer-nav">
                <a href="//twitter.com/madeofhill">twitter</a>
                <a href="//github.com/made.of.hill">instagram</a>
                <a href="//github.com/hillonyechekwa">github</a>
            </nav>
        </footer>
    )
}

export default Footer;