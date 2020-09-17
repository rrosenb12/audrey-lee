import facebookglpyh from '../glyphs/facebook.svg'
import twitterglyph from '../glyphs/twitter.svg'
import instaglyph from '../glyphs/instagram.svg'
import linkedinglyph from '../glyphs/linkedin.svg'
import emailglyph from '../glyphs/email.png'
import React from 'react'

export default function Footer(){
    return(
        <div className="footer">
            <a href='https://www.facebook.com/people/Audrey-Lee/100007050735775' target="_blank" rel="noopener noreferrer">
                <img className="contactglyph" src={facebookglpyh} alt="facebook icon" height="30"/>
            </a>
            <a href='https://twitter.com/audreyyllee' target="_blank" rel="noopener noreferrer">
                <img className="contactglyph" src={twitterglyph} alt="twitter icon" height="30"/>
            </a>
            <a href='http://instagram.com/audreyyllee' target="_blank" rel="noopener noreferrer">
                <img className="contactglyph" src={instaglyph} alt="instagram icon" height="30"/>
            </a>
            <a href='https://www.linkedin.com/in/audreymorganlee/' target="_blank" rel="noopener noreferrer">
                <img className="contactglyph" src={linkedinglyph} alt="linkedin icon" height="30"/>
            </a>
            <a href='mailto:alee3@fandm.edu' target="_blank" rel="noopener noreferrer">
                <img src={emailglyph} alt="email icon" height="35" width="30"/>
            </a>
        </div>
    )
}