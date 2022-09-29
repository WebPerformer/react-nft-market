import React, { useState } from 'react'

// images
import LogoLight from '../assets/img/logo-light.png'
import LogoDark from '../assets/img/logo-dark.png'

function Nav() {

    const [navbar, setNavbar] = useState(false)
    const [sticky, setSticky] = useState("")
    const [logo, setLogo] = useState(LogoLight)
    
    window.onscroll = () => {
        scrollY > 20 ? setSticky("sticky") : setSticky("")
        scrollY > 20 ? setLogo(LogoDark) : setLogo(LogoLight)
    }

    return (
        <nav className={navbar ? "navbar" : `navbar ${sticky}`}>
            <div className="content">
                <div className="navbar-brand">
                    <img src={logo} alt="" className="logo" />
                </div>
                <ul className="navbar-menu">
                    <li>Início</li>
                    <li>Carteira</li>
                    <li>Marketplace</li>
                    <li>Categorias</li>
                    <li>Criadores</li>
                </ul>
                <button className="wallet-connect">Conectar</button>
            </div>
        </nav>
    )
}

export default Nav