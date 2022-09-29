import React, { useState, useEffect } from 'react'

// images
import LogoDark from '../assets/img/logo-dark.png'
import LogoLight from '../assets/img/logo-light.png'

// icons
import { FiShoppingCart, FiMenu, FiLinkedin, FiInstagram, FiFacebook, FiTwitter, FiSearch, FiHeadphones } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'

function NavResponsive() {

    const [menu, setMenu] = useState(false)
    const [sticky, setSticky] = useState("")
    const [logo, setLogo] = useState(LogoLight)
    const [dark, setDark] = useState("")
    
    useEffect(() => {
        window.onscroll = () => {
            scrollY > 20 ? setSticky("sticky") : setSticky("")
            scrollY > 20 ? setLogo(LogoDark) : setLogo(LogoLight)
            scrollY > 20 ? setDark("menu-dark") : setDark("")
        }
    }, [])

    return (
        <nav className={[menu ? `navbar show ${sticky}` : `navbar ${sticky}`]}>
            <div className="content">
                <div className={`menu-btn ${dark}`} onClick={() => setMenu(!menu)}><FiMenu/></div>
                <div className="menu-responsive">
                    <div className="icon-menu" onClick={() => setMenu(!menu)}><GrClose/></div>
                    <img src={LogoDark} alt="" />
                    <div className="menu-text">
                        <p>Esse site vai para meu Github e estará dísponivel para avaliação do código. Qualquer dúvida e conselho, estarei disponivel no Linkedin. E se gostou deixe seu Feedback por lá também.</p>
                    </div>
                    <div className="social-media">
                        <FiLinkedin/>
                        <FiInstagram/>
                        <FiFacebook/>
                        <FiTwitter/>
                    </div>
                    <ul className="list-menu">
                        <li>Inicio</li>
                        <li>Carteira</li>
                        <li>Marketplace</li>
                        <li>Categorias</li>
                        <li>Craidores</li>
                    </ul>
                </div>
                <div className={menu ? "bg-overlay-active" : "bg-overlay"} onClick={() => setMenu(!menu)}></div>
                <div className="navbar-brand">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-button">
                    <button className="wallet-connect">Conectar</button>
                </div>
            </div>
        </nav>
    )
}

export default NavResponsive