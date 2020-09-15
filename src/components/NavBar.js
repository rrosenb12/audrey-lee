import React from 'react'
import {NavLink} from 'react-router-dom'
import ddbutton from '../glyphs/ddbutton.png'

export default class NavBar extends React.Component{

    state = {
        rotate: false
    }

    clickHandler = (e) => {
        console.log(e.target.className)
        this.setState(previousState => {
            return {
                rotate: !previousState.rotate
            }
        }, () => console.log(this.state.rotate))
    }

    render(){
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
                    <img src={ddbutton} alt='ddbutton' onClick={this.clickHandler} id="ddbutton" className={this.state.rotate ? "rotate" : ""} height="50"/>
                    <div className="titlewrapper">
                        <NavLink to="/">
                            <h1 className="navbartitle">Audrey Lee</h1>
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }
}