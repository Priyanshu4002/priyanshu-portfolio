import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({setMenuOpen,menuOpen}) => {
  return (
   <>
        <nav>
            <NavContent setMenuOpen={setMenuOpen}/>
        </nav>
        <button className='navBtn' onClick={()=>setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
        </button>
    </> 
  )
}

export const NavContent=({setMenuOpen})=>(
    <>
        <h2>Priyanshu..</h2>
        <div>
            <a href="$home" onClick={()=>setMenuOpen(false)}>Home</a>
            <a href="#work" onClick={()=>setMenuOpen(false)}>Work</a>
            <a href="#timeline" onClick={()=>setMenuOpen(false)}>Experience</a>
            <a href="#services" onClick={()=>setMenuOpen(false)}>Skills</a>
            <a href="#testimonial" onClick={()=>setMenuOpen(false)}>Education</a>
            <a href="#certification" onClick={()=>setMenuOpen(false)}>Certification</a>
            <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
        </div>
        <a href="#contact">
            <button>Email</button>
        </a>
    </>
)

export const HeaderPhone = ({menuOpen , setMenuOpen}) => {
    return (
      <div className={`navPhone ${menuOpen?"navPhoneComes":""}`}>
        <NavContent setMenuOpen={setMenuOpen}/>
      </div>
    )
  }

export default Header
