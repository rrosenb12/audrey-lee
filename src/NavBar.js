import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar(){
    return(
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
    )
}