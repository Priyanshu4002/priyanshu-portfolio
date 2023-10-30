import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'
import me from '../assets/priyanshu.jpg'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} alt="Founder" />
            <h2>Priyanshu Shrivastava</h2>
            <p>Motivation is temporary, but discipline last forever.</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://instagram.com/priyanshu_3._" target={'blank'}>
                    <AiFillInstagram />
                </a>
                <a href="https://github.com/Priyanshu4002" target={'blank'}>
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/priyanshu-shrivastava-23170b226" target={'blank'}>
                    <AiFillLinkedin />
                </a>
            </article>
        </aside>
        <a href="#home">
            <AiOutlineArrowUp />
        </a>
    </footer>
  )
}

export default Footer
