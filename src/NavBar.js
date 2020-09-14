import React from 'react'
import facebookglpyh from './glyphs/facebook.svg'
import twitterglyph from './glyphs/twitter.svg'
import instaglyph from './glyphs/instagram.svg'
import linkedinglyph from './glyphs/linkedin.svg'
import emailglyph from './glyphs/email.png'
import {NavLink} from 'react-router-dom'

export default function NavBar(){
    return(
        <>
            <div className="navbarrow">
                <div className="navbar">
                    <p className="navbaritem">Publications</p>
                    <p className="navbaritem">Probably, Angels</p>
                    <NavLink to="/">
                        <h1 className="navbartitle">Audrey Lee</h1>
                    </NavLink>
                    <p className="navbaritem">Awards & Recognitions</p>
                    <p className="navbaritem">Media</p>
                </div>
            </div>
            
            {/* <div className="footer">
                <a href='https://www.facebook.com/people/Audrey-Lee/100007050735775' target="_blank" rel="noopener noreferrer"><img className="contactglyph" src={facebookglpyh} height="30"/></a>
                <a href='https://twitter.com/audreyyllee' target="_blank" rel="noopener noreferrer"><img className="contactglyph" src={twitterglyph} height="30"/></a>
                <a href='http://instagram.com/audreyyllee' target="_blank" rel="noopener noreferrer"><img className="contactglyph" src={instaglyph} height="30"/></a>
                <a href='https://www.linkedin.com/in/audreymorganlee/' target="_blank" rel="noopener noreferrer"><img className="contactglyph" src={linkedinglyph} height="30"/></a>
                <a href='mailto:alee3@fandm.edu' target="_blank" rel="noopener noreferrer"><img src={emailglyph} height="35" width="30"/></a>
            </div> */}
        </>
    )
}