import React, { useRef } from 'react'
import {animate, motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronBarDown} from 'react-icons/bs'
import me from '../assets/logo.png';

const Home = () => {

    const clientCount= useRef(null);
    const projectCount= useRef(null);

    const animationClientsCount= ()=>{
        animate(0,200,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
        });
    };

    const animationProjectsCount= ()=>{
        animate(0,10,{
            duration:1,
            onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),
        });
    };

    const animations={
        h1: {
            initial: {
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            }
        },
        button: {
            initial: {
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            }
        }
    }
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I Am <br /> Priyanshu Shrivastava
                </motion.h1>
                <Typewriter 
                    options={{
                        strings:["A Developer","A Designer","A Creater"],
                        autoStart:true,
                        loop:true,
                        cursor:"",
                        wrapperClassName:"typewriterpara",
                    }}
                />
                <div>
                    <a href="#contact">Hire Me</a>
                    <a href="#work">
                        Projects <BsArrowUpRight />
                    </a>
                </div>
                <article>
                    <p>+
                        {/* {
                            ratio<2 && (<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>)
                        } */}
                         <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
                    </p>
                    <span>Coding Problem Solving</span>
                </article>

                <aside>
                    <article>
                        <p>+
                            {/* {
                                ratio<2 && (<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>)
                            } */}
                            <motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
                        </p>
                        <span>Projects Made</span>
                    </article>
                    <article data-special>
                        <p>Contact</p>
                        <span>singhpsv2002@gmail.com</span>
                    </article>
                </aside>
            </div>
        </section>
        <section>
            <img src={me} alt="priyanshu" />
        </section>

        <BsChevronBarDown />
    </div>
  )
}

export default Home
