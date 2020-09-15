import React from 'react'
import {NavLink} from 'react-router-dom'
import ddbutton from './glyphs/ddbutton.png'

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

            <div className="smallnavbarrow">
            <img className="ddbutton" src={ddbutton} alt='ddbutton' height="50"/>
                <div className="titlewrapper">
                    <NavLink to="/">
                        <h1 className="navbartitle">Audrey Lee</h1>
                    </NavLink>
                </div>
            </div>
        </>
    )
}