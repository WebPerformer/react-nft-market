import React from 'react'

// images
import Logo from '../assets/img/logo-light.png'

// icosn
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGoogle, FaDribbble } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
        <div className="content">
            <div className="footer-container">
                <div className="footer-infos">
                    <div className="footer-brand">
                        <img src={Logo} alt="" />
                        <div className="text">
                            <p>Landing Page focada em NFTs com propósito de mostrar minhas habilidades.</p>
                            <p>Esse site vai para meu Github e estará dísponivel para avaliação do código. Qualquer dúvida e conselho, estarei disponivel no Linkedin. E se gostou deixe seu Feedback por lá também.</p>
                        </div>
                    </div>
                    <div className="footer-content">
                        <h1>Company</h1>
                        <p>Sobre Nós</p>
                        <p>Galeria</p>
                        <p>Projetos</p>
                        <p>Timeline</p>
                    </div>
                    <div className="footer-content">
                        <h1>Pages</h1>
                        <p>Calendario</p>
                        <p>Caixa de Mensagem</p>
                        <p>Chat</p>
                        <p>Ofertas</p>
                        <p>Quadro Kanban</p>
                    </div>
                    <div className="footer-content">
                        <h1>Suporte</h1>
                        <p>Perguntas Frequentes</p>
                        <p>Contato</p>
                    </div>
                </div>
                <div className="social-infos">
                    <div className="copyright">2022 © Verizon - WebPerformer</div>
                    <div className="social-medias">
                        <div className="icon"><FaFacebookF/></div>
                        <div className="icon"><FaGithub/></div>
                        <div className="icon"><FaLinkedinIn/></div>
                        <div className="icon"><FaGoogle/></div>
                        <div className="icon"><FaDribbble/></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer