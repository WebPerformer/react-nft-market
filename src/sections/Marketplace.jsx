import React, { useState } from 'react'

// components
import cards from '../components/DataFilter'

// icons
import { RiPriceTag3Fill } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa'

function Marketplace() {

  const [filter, setFilter] = useState("all")

  function onchange(v) {
    setFilter(v);
  }
  
  return (
    <section className="marketplace">
      <div className="content">
        <div className="text-container">
          <h1 className="title">Explorar Produtos</h1>
          <p className="subtitle">Os widgets de coleção são especializados em exibir muitos elementos do mesmo tipo, como uma coleção de imagens de uma coleção de artigos.</p>
        </div>
        <div className="filter-buttons">
          <button onClick={(e) => onchange(e.target.value)} className={`${filter == "all" && 'active'}`} value="all">Todos</button>
          <button onClick={(e) => onchange(e.target.value)} className={`${filter == "Artwork" && 'active'}`} value="Artwork">Artwork</button>
          <button onClick={(e) => onchange(e.target.value)} className={`${filter == "Music" && 'active'}`} value="Music">Música</button>
          <button onClick={(e) => onchange(e.target.value)} className={`${filter == "Games" && 'active'}`} value="Games">Jogos</button>
          <button onClick={(e) => onchange(e.target.value)} className={`${filter == "Crypto" && 'active'}`} value="Crypto">Crypto</button>
          <button onClick={(e) => onchange(e.target.value)} className={`${filter == "3d Style" && 'active'}`} value="3d Style">Estilo 3D</button>
        </div>
        <div className="cards">
          {cards.map((p, index) => {
            if(filter === "all"){
              return(
                <div className="card" key={index}>
                  <img src={p.photo} alt="" />
                  <div className="card-text">
                    <div className="card-header">
                      <div className="title">{p.title}</div>
                      <div className="rating"><FaHeart/> {p.rating}</div>
                    </div>
                    <div className="category">{p.types}</div>
                    <div className="line"></div>
                    <div className="card-footer">
                      <div className="highest"><RiPriceTag3Fill/> Mais alto: <span>{p.highest}</span></div>
                      <div className="price">{p.price}</div>
                    </div>
                  </div>
                </div>
              )
            } else if(filter === p.types){
              return(
                <div className="card" key={index}>
                  <img src={p.photo} alt="" />
                  <div className="card-text">
                    <div className="card-header">
                      <div className="title">{p.title}</div>
                      <div className="rating"><FaHeart/> {p.rating}</div>
                    </div>
                    <div className="category">{p.types}</div>
                    <div className="line"></div>
                    <div className="card-footer">
                      <div className="highest"><RiPriceTag3Fill/> Highest: <span>{p.highest}</span></div>
                      <div className="price">{p.price}</div>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Marketplace