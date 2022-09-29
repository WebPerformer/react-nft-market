import React from 'react'

// image
import HomeBackground from '../assets/img/bg-home.jpg'

// icons
import { BsArrowRight } from 'react-icons/bs'

function Hero() {
  return (
    <section className="hero">
      <div className="bg-hero">
        <img src={HomeBackground} alt="" />
        <div className="bg-overlay"></div>
      </div>
      <div className="content">
        <div className="hero-slogan">
          <h1>Descubra a Arte Digital & <br /> Pegue o Seu <span>NFT Marketplace</span></h1>
        </div>
        <div className="hero-subtext">
          <p>NFT pode ser arte? NFTs (non-fungible tokens) são ativos digitais únicos. Dado que são de natureza digital, as obras de arte físicas podem ser transformadas em NFTs?</p>
        </div>
        <div className="hero-buttons">
          <button className="create">Criar o Seu <BsArrowRight/></button>
          <button className="explore">Explorar Agora <BsArrowRight/></button>
        </div>
      </div>
    </section>
  )
}

export default Hero