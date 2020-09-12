import React from 'react'
import facebookglpyh from './glyphs/facebook.svg'
import twitterglyph from './glyphs/twitter.svg'
import instaglyph from './glyphs/instagram.svg'
import linkedinglyph from './glyphs/linkedin.svg'
import {NavLink} from 'react-router-dom'

export default function NavBar(){
    return(
        <>
            <div className="navbar">
                <p className="navbaritem">Publications</p>
                <p className="navbaritem">Probably, Angels</p>
                <NavLink to="/home">
                    <h1 className="navbartitle">Audrey Lee</h1>
                </NavLink>
                <p className="navbaritem">Awards & Recognitions</p>
                <p className="navbaritem">Media</p>
            </div>
            
            <div className="footer">
                <img className="contactglyph" src={facebookglpyh} height="30"/>
                <img className="contactglyph" src={twitterglyph} height="30"/>
                <img className="contactglyph" src={instaglyph} height="30"/>
                <img className="contactglyph" src={linkedinglyph} height="30"/>
            </div>
        </>
    )
}