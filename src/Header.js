import React from 'react'
import logo from './img/logo.png'

function Header() {
    return (
        <div>
            <h1>MEME Generator</h1>
            <img className="logo" src={logo} alt="logo"/>
        </div>
    )
}

export default Header